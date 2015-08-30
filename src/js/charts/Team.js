export default class Team {

	constructor(data,options) {
		
		

		//console.log("Team",data,options)

		this.getTeamInfo = () => {};

		this.filter=0;

		this.data=data;
		this.options=options;
		this.extents=options.extents;
		
		//this._updateData(data);

		this.margins={
			top:20,
			left:10,
			right:10,
			bottom:20
		}



		this._buildChart();



	}

	_buildChart() {

		//console.log("buildChart",this.options);

		let self = this;

		let box = this.options.container.getBoundingClientRect();
		this.width = box.width;
		this.height = box.height;

		console.log(this.width,this.height)

		this.xscale=d3.scale.linear().domain([0,this.extents.perPosition[1]]).range([0,this.width-(this.margins.left+this.margins.right)]);
		this.yscale=d3.scale.ordinal().domain(this.extents.positions).rangePoints([0,this.height-(this.margins.top+this.margins.bottom)])



		d3.select(this.options.container)
			.append("h2")
			.text(this.options.team)

		this.svg = d3.select(this.options.container)
						.append("div")
							.attr("class","players")
								.append("svg")
								.attr("width",this.width)
								.attr("height",this.height)

		this._addField();

		this.svg.append("line")
				.attr("x1",this.width/2)
				.attr("x2",this.width/2)
				.attr("y1",0)
				.attr("y2",this.height)

		this.players = this.svg.append("g")
						.attr("class","players")
						.attr("transform","translate("+this.margins.left+","+this.margins.top+")");

		let player_width=(Math.floor(this.width / (this.extents.perPosition[1]+1)))-2;

		let player = this.players.selectAll("g.player")
						.data(this.data.players)
						.enter()
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

								var dx=self.xscale.range()[1]/2 - self.xscale((self.data[d.Position].length-1)/2);//((self.width-self.margins.left-self.margins.right)-self.data[d.Position].length*player_width)/2

								return "translate("+(x+dx)+","+y+")"
							})
		
		player.filter(function(d){
			return d.Affected!==2;
		}).append("rect")
				.attr("x",-player_width/2)
				.attr("y",-player_width/2)
				.attr("width",player_width)
				.attr("height",player_width)
				//.attr("rx",2)
				//.attr("ry",2)

		var cross=player.filter(function(d){
			return d.Affected===2;
		})
			.append("g")
				.attr("class","cross");

		cross.append("line")
			.attr("x1",-player_width/2.2)
			.attr("y1",-player_width/2.2)
			.attr("x2",player_width/2.2)
			.attr("y2",player_width/2.2)
		cross.append("line")
			.attr("x1",player_width/2.2)
			.attr("y1",-player_width/2.2)
			.attr("x2",-player_width/2.2)
			.attr("y2",player_width/2.2)


	}

	_addField() {

		let self = this;

		var position=this.svg.append("g")
						.attr("class","field")
						.attr("transform","translate("+this.margins.left+","+this.margins.top+")")
						.selectAll("g.position")
							.data(this.extents.positions)
							.enter()
							.append("g")
								.attr("class","position")
								.attr("transform",function(d){
									var x=0,
										y=self.yscale(d);
									return "translate("+x+","+y+")";
								})

		position.append("line")
			.attr("x1",self.xscale.range()[1]/2)
			.attr("y1",-this.margins.top)
			.attr("x2",self.xscale.range()[1]/2)
			.attr("y2",this.height)

		position.append("line")
			.attr("x1",-5)
			.attr("y1",0)
			.attr("x2",this.xscale.range()[1]+5)
			.attr("y1",0)

		position.append("text")
			.attr("x",0)
			.attr("y",-1)
			//.attr("dy","0.3em")
			.text(function(d){
				return d[0];
			})
	}

	_filterTeam(statuses) {
		let player = this.players.selectAll("g.player");

		player.filter(function(d){

		})

	}

}