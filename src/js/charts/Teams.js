import Team from './Team';

import {throttle} from '../lib/underscore-lite';
import {dataNested, dataExtents} from '../utils/data';
import {setNumCol, getNumCol} from '../utils/variables';


export default class Teams {

	constructor(data, options) {
		this.id = options.container;

    	this.teams = dataNested(data,"Club");
    	this.extents = dataExtents(this.teams);

        this._buildTeams();
        this._updateTeamWidth();
    }
    

	_buildTeams() {
        
		let self = this;
        
        var teams = this.teams.sort(function(a,b){
            var aff_b=b.values.players.filter(function(d){return d.Affected===2;}).length,
                aff_a=a.values.players.filter(function(d){return d.Affected===2;}).length;
            if(aff_a === aff_b) {
                aff_b=b.values.players.filter(function(d){return d.Affected===1;}).length;
                aff_a=a.values.players.filter(function(d){return d.Affected===1;}).length;
            }
            return  aff_b - aff_a;
        });

        d3.select(this.id)
		    .append("div")
            .attr("class","teams")
            .selectAll("div.team")
            .data(teams).enter()
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
                });
	}


    _updateTeamWidth() {

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
	}
}
