import Team from './Team';

import {throttle} from '../lib/underscore-lite';
import {setNumCol, getNumCol} from '../utils/variables';

import teamData from '../../data/teams.json!json';


export default class Teams {

	constructor(id, params) {
		this.id = id;
		this.params = params;

        this._buildTeams();
        this._updateTeamWidth();
    }
    

	_buildTeams() {
        
		let self = this;
        
        var teams = teamData; 
        if (this.params) {
            teams = teamData.filter(d => {
                return this.params.indexOf(d.key) !== -1; 
            });
        }

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
                        order: i+1
                    });
                });
	}


    _updateTeamWidth() {

        var chartEl = document.querySelector(this.id),
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
