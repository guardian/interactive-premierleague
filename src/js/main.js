import mainHTML from './text/main.html!text';
import mainNewcastleHTML from './text/mainNewcastle.html!text';
import mainTop5HTML from './text/mainTop5.html!text';

import d3 from './lib/d3-lite.js';

import Teams from './charts/Teams';


export function init(el, param) {
    
    var chart = "",
        html = mainHTML;
    if (param === "Newcastle United") {
        chart = "Newcastle";
        html = mainNewcastleHTML;
    } else if (param) {
        chart = "Top5";
        html = mainTop5HTML;
    }
    
    el.innerHTML = html;
    //this.param = param;

    var key = "1VRr47zAvhcPGojDpswI_rHkvlNjMlUcbQxqdtdq0tr8",
        src = "http://visuals.guim.co.uk/spreadsheetdata/" + key + ".json"; 
    
    d3.json(src, function(err, spreadsheet) {
        
        // load data
        var sheetHeader = spreadsheet.sheets.header[0],
            sheetPlayer = spreadsheet.sheets.footballers;
        
        // update header
        /*if (!this.param) {
        var headlineEl = el.querySelector(".interactive-es6-headline"), 
            standfirstEl = el.querySelector(".standfirst"), 
            sourceEl = el.querySelector(".sources");  
        
        headlineEl.textContent = sheetHeader.headline;
        standfisrtEl.textContent = sheetHeader.standfirst;
        sourceEl.textContent = sheetHeader.source;
        }*/

        // add charts
        var players = sheetPlayer.map(d => {
            var data = {
                ID : d.id,
                Name : d.name,
                Affected : d.affected,        
                Club : d.club,        
                Position : d.position,
                "Country of birth" : d.country,
                "National team" : d.country
            };
            return data;
        });
        //console.log(data);
        
        new Teams(players, "#premierLeague"+chart, param);
    }); 
}
