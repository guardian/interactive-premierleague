import DataUtils from '../utils/data'
import Team from './Team'

export default class Teams {

	constructor(data,options) {
		
		

		console.log("Teams",data)

		var dataUtils=new DataUtils();
    	
    	this.teams=dataUtils.nestData(data,"Club");
    	this.extents=dataUtils.getExtents(this.teams);

    	console.log(this.teams)
    	console.log(this.extents)

		this.getTeamInfo = () => {};

		this.extents;

		this.data=data;
		this.options=options;



		this._buildTeams();

		//this._updateData(data);

		//this._buildChart();

	}

	_buildTeams() {
		console.log("Building teams",this.options.container)

		let self = this;

		d3.select(this.options.container)
			.append("div")
				.attr("class","teams")
				.selectAll("div.team")
					.data(this.teams.sort(function(a,b){
						return b.values.players.filter(function(d){return d.Affected===2}).length - a.values.players.filter(function(d){return d.Affected===2}).length
					}))
					.enter()
					.append("div")
						.attr("class","team clearfix")
						.attr("rel",function(d){
							return d.key;
						})
						.each(function(d){
							new Team(d.values,{
								team:d.key,
								container:this,
								extents:self.extents
							});
						})

	}

	_updateTeams() {

	}

}