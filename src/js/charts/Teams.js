import DataUtils from '../utils/data';
import Team from './Team';

import {throttle} from '../lib/underscore-lite';
import {setNumCol, getNumCol} from '../utils/variables';


export default class Teams {

	constructor(data,options) {
		//console.log("Teams",data)

		var dataUtils = new DataUtils();
    	this.teams = dataUtils.nestData(data,"Club");
    	this.extents = dataUtils.getExtents(this.teams);

		this.data = data;
		this.options = options;

		this._buildTeams();


        var chartEl = document.querySelector(".interactive-container"),
            teamEls = document.querySelectorAll(".team"),
            teamArr = Array.prototype.slice.call(teamEls);

        // set width to .team based on width of elChart
        function setTeamWidth() {
            var teamNumPerCol = Math.floor(chartEl.clientWidth/150),
                chartWidth = 100/teamNumPerCol;
            
            if (teamNumPerCol === getNumCol()) { return; }
            //TODO: user class instead to improve perf
            teamArr.forEach(d => d.style.width = chartWidth+"%"); 
            setNumCol(teamNumPerCol);
        }
        window.addEventListener('resize', throttle(setTeamWidth, 1000));
        setTeamWidth(); 

        //this._updateData(data);
		//this._buildChart();
	}


	_buildTeams() {
		//console.log("Building teams",this.options.container)

		let self = this;

		d3.select(this.options.container)
			.append("div")
				.attr("class","teams")
				.selectAll("div.team")
					.data(this.teams.sort(function(a,b){
						var aff_b=b.values.players.filter(function(d){return d.Affected===2}).length,
							aff_a=a.values.players.filter(function(d){return d.Affected===2}).length;
						if(aff_a === aff_b) {
							aff_b=b.values.players.filter(function(d){return d.Affected===1}).length;
							aff_a=a.values.players.filter(function(d){return d.Affected===1}).length;
						}
						return  aff_b - aff_a;
						
						
					}))
					.enter()
					.append("div")
						.attr("class","team clearfix")
						.attr("rel",function(d){
							return d.key;
						})
						.each(function(d, i){
                            new Team(d.values,{
								team:d.key,
								container:this,
								extents:self.extents,
                                order: i+1
                            });
						})

	}

	_updateTeams() {

	}

}
