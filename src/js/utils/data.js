export default class DataUtils {

	constructor() {
		

	}

	updateData(data) {

	}
	mergeJSON(json1,json2,id) {

		json1.forEach(function(row){
			var player=json2.find(function(d){
				return d[id]===row[id];
			});
			if(player) {
				//console.log(player.Affected,player);
				row.Affected=0;
				if(typeof player.Affected !== 'undefined') {
					row.Affected=player.Affected==="Y"?1:2;	
				}
				
			} else {
				row.Affected=0;
			}
			
		})
	}
	nestData(data,key) {

		var nested_data=d3.nest()
					.key(function(d){
						return d[key];
					})
					.rollup(function(leaves){
						return {
							players:leaves,
							GOALKEEPER:leaves.filter(function(d){
								return d.Position==="GOALKEEPER"
							}).map(function(d,i){
								d.index=i
								return d;
							}),
							DEFENDER:leaves.filter(function(d){
								return d.Position==="DEFENDER"
							}).map(function(d,i){
								d.index=i
								return d;
							}),
							MIDFIELDER:leaves.filter(function(d){
								return d.Position==="MIDFIELDER"
							}).map(function(d,i){
								d.index=i
								return d;
							}),
							FORWARD:leaves.filter(function(d){
								return d.Position==="FORWARD"
							}).map(function(d,i){
								d.index=i
								return d;
							}),
							safe:leaves.filter(function(d){
								return d.Affected===1;
							}).length,
							affected:leaves.filter(function(d){
								return d.Affected===2;
							}).length
						}
					})
					.entries(data);



		return nested_data;

	}
	getExtents(data) {
		let extents= {
			players:d3.extent(data,function(d){
				return d.values.players.length;
			}),
			GOALKEEPER:d3.extent(data,function(d){
				return d.values.GOALKEEPER.length;
			}),
			DEFENDER:d3.extent(data,function(d){
				return d.values.DEFENDER.length;
			}),
			MIDFIELDER:d3.extent(data,function(d){
				return d.values.MIDFIELDER.length;
			}),
			FORWARD:d3.extent(data,function(d){
				return d.values.FORWARD.length;
			})
		};

		extents.perPosition=[
			d3.min([extents.GOALKEEPER[0],extents.DEFENDER[0],extents.MIDFIELDER[0],extents.FORWARD[0]]),
			d3.max([extents.GOALKEEPER[1],extents.DEFENDER[1],extents.MIDFIELDER[1],extents.FORWARD[1]])
		]

		extents.positions=(["GOALKEEPER","DEFENDER","MIDFIELDER","FORWARD"]).reverse();

		return extents;
	}

}