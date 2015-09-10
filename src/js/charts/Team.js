import Tooltip from './Tooltip';


export default class Team {

	constructor(data,options) {
                
		this.filter = 0;
		this.data = data;
		this.options = options;
		this.extents = options.extents;
		this.el = options.container;
		
		this.margins = {
			top:20,
			left:15,
			right:15,
			bottom:20
		};

		this._buildChart();
    }


	_buildChart() {

		let self = this;
		
        this.width = 145;
		this.height = 120;

		this.xscale = d3.scale.linear().domain([0,this.extents.perPosition[1]]).range([0,this.width-(this.margins.left+this.margins.right)]);
		this.yscale = d3.scale.ordinal().domain(this.extents.positions).rangePoints([0,this.height-(this.margins.top+this.margins.bottom)]);
        
        /* add header */
		var header = d3.select(this.el).append("div").attr("class","header");

		header
			.append("h2")
			.text(this.options.team);
		header
			.append("p")
			.html("Affected: <span class=\"affected\">"+this.data.affected+"</span> Safe: <span class=\"safe\">"+this.data.safe+"</span>");

		this.svg_container = d3.select(this.el)
            .append("div")
            .attr("class","charts");

		this.svg = this.svg_container
            .append("svg")
            .attr("width",this.width)
            .attr("height",this.height)
            .on("mouseleave",function(){
                self.tooltip.hide();
            });

		this.tooltip = new Tooltip({
	        container:this.svg_container.node(),
	    	margins:this.margins,
	    	padding:"10px",
	    	width:120,
	    	html:"<p><span></span> <span></span> is <span></span></p>",
	    	indicators:[
	    		{ id:"team" },
	    		{ id:"name" },
	    		{ id:"status" }
	    	]
	    });
        
        
        /* add players - field */
		this._addField();

        /* add players - players */
		this.svg.append("line")
            .attr("x1",this.width/2)
            .attr("x2",this.width/2)
            .attr("y1",0)
            .attr("y2",this.height);
				
		this.players = this.svg.append("g")
            .attr("class","players")
            .attr("transform","translate("+this.margins.left+","+this.margins.top+")");

		let player_width = (Math.floor(this.width / (this.extents.perPosition[1]+1)))-2;

		let player = this.players
            .selectAll("g.player")
            .data(this.data.players).enter()
                .append("g")
                .attr("class","player")
                .classed("safe",function(d){
                    return d.Affected === 1;
                })
                .classed("affected",function(d){
                    return d.Affected === 2;
                })
                .attr("rel",function(d){
                    return d.ID;
                })
                .attr("transform",function(d,i){
                    //console.log(d.ID,d.index,d.Position)
                    var x=self.xscale(d.index),
                        y=self.yscale(d.Position);

                    var dx=self.xscale.range()[1]/2 - self.xscale((self.data[d.Position].length-1)/2);
                    //((self.width-self.margins.left-self.margins.right)-self.data[d.Position].length*player_width)/2

                    return "translate("+(x+dx)+","+y+")";
                })
                .on("mouseenter",function(d){
                    var x=self.xscale(d.index),
                        y=self.yscale(d.Position);
                    var dx=self.xscale.range()[1]/2 - self.xscale((self.data[d.Position].length-1)/2);

                    var status=(d.Affected===0?"not affected":(d.Affected===1?"affected, but safe":"in danger")),
                        national_team=d["National team"]?d["National team"]:d["Country of birth"],
                        playing_for=d["National team"]?"playing for":"from";
                    
                    self.tooltip.show([
                    {
                        id:"team",
                        value:national_team+"’s"
                    },
                    {
                        id:"name",
                        value:d.Name
                    },
                    {
                        id:"status",
                        value:status
                    }],
                        x+dx+2,
                        y-1, 
                        self.options.order,
                        null
                    );
                });
		
		player.filter(function(d){
			return d.Affected!==2;
		}).append("rect")
            .attr("x",-player_width/2)
            .attr("y",-player_width/2)
            .attr("width",player_width)
            .attr("height",player_width);
            //.attr("rx",2)
            //.attr("ry",2)

		var cross = player.filter(function(d){
			    return d.Affected===2;
		    }).append("g")
			.attr("class","cross");

		cross.append("line")
			.attr("x1",-player_width/2.2)
			.attr("y1",-player_width/2.2)
			.attr("x2",player_width/2.2)
			.attr("y2",player_width/2.2);

        cross.append("line")
			.attr("x1",player_width/2.2)
			.attr("y1",-player_width/2.2)
			.attr("x2",-player_width/2.2)
			.attr("y2",player_width/2.2);
	}


	_addField() {

		let self = this;

		var position = this.svg
            .append("g")
            .attr("class", "field")
            .attr("transform", "translate("+this.margins.left+","+this.margins.top+")")
            .selectAll("g.position")
            .data(this.extents.positions).enter()
                .append("g")
                .attr("class", "position")
                .attr("transform", function(d){
                    return "translate(0, "+self.yscale(d)+")";
                });

        position.append("line")
			.attr("x1", -5)
			.attr("y1", 0)
			.attr("x2", this.xscale.range()[1]+5)
			.attr("y2", 0);

		position.append("text")
			.attr("x",-10)
			.attr("y",0)
			.attr("dy","0.3em")
			.text(function(d){
				return d[0];
			});
	}
}
