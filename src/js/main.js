//import iframeMessenger from 'guardian/iframe-messenger';
import mainHTML from './text/main.html!text';
import d3 from './lib/d3-lite.js';

import Teams from './charts/Teams';


export function init(el, context, config, mediator) {
    //iframeMessenger.enableAutoResize();
    el.innerHTML = mainHTML;

    var key = "1VRr47zAvhcPGojDpswI_rHkvlNjMlUcbQxqdtdq0tr8",
        src = "http://visuals.guim.co.uk/spreadsheetdata/" + key + ".json"; 
    
    d3.json(src, function(err, spreadsheet) {
        
        // load data
        var sheetHeader = spreadsheet.sheets.header[0],
            sheetPlayer = spreadsheet.sheets.footballers;
        
        // update header
        var headlineEl = el.querySelector(".interactive-es6-headline"), 
            standfirstEl = el.querySelector(".standfirst"),
            sourceEl = el.querySelector(".sources");  
        
        headlineEl.textContent = sheetHeader.headline;
        standfirstEl.textContent = sheetHeader.standfirst;
        sourceEl.textContent = sheetHeader.source;
        
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
        
        new Teams(players, {container:"#premierLeague"});
    }); 
}
