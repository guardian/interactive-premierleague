import {getNumCol} from '../utils/variables';

export default function Tooltip(options) {

	var w=options.width || 200,
		h=options.height || 110;

	//////////console.log("!!!!!!!!!!!",options)

	var tooltip=d3.select(options.container)
					.append("div")
						.attr("class","tooltip")

	var arrowBox=tooltip.append("div")
						.attr("class","arrow_box clearfix")
						.style("width",w+"px")

	if(options.padding) {
		arrowBox.style("padding",options.padding)
	}

	var tooltipTitle;
	if(options.title) {
		tooltipTitle=arrowBox.append("h1")
			.attr("class","tooltip-title")
			.text("title");
	}

	var indicator;
	if(options.html) {
		arrowBox.html(options.html);

		indicator=arrowBox.selectAll("span")
				.data(options.indicators)
				.attr("id",function(d){
					return d.id;
				})
				.attr("class","value")
	} else {
		indicator=arrowBox.selectAll("div.indicator")
				.data(options.indicators,function(d){
					return d.id;
				})
				.enter()
				.append("div")
					.attr("class","indicator clearfix")

		var value=indicator.append("span")
					.attr("class","value")
					.attr("id",function(d){
						return d.id;
					});

		indicator.append("span")
					.attr("class","title")
					.text(function(d){
						return d.title;
					});
	}
	
    var chartEl = document.querySelector(".interactive-container");
	

	this.hide=function() {
		tooltip.classed("visible",false);
	};
	this.show=function(data,x,y,order,title) {

        var isRightMost = (order%getNumCol() === 0),
            left = isRightMost ? (x+86) : (x+options.margins.left),
            top = (y+options.margins.top-25);
		
        if(title) {
			tooltipTitle.text(title);	
		}
		
		indicator
        .data(data)
        .text(function(d){return d.value;});

		tooltip
        .classed("right", isRightMost)
        .style("top", top+"px")
        .style("left", left+"px")
        .classed("visible",true);
	};

}
