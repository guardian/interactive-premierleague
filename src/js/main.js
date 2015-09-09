import iframeMessenger from 'guardian/iframe-messenger';
import mainHTML from './text/main.html!text';
import players from '../data/players.json!json';
import affected from '../data/affected.json!json';
import d3 from './lib/d3-lite.js';

import Teams from './charts/Teams';
import DataUtils from './utils/data';

export function init(el, context, config, mediator) {
    iframeMessenger.enableAutoResize();

    el.innerHTML = mainHTML;

    //console.log(d3)
    //console.log(players)
    //console.log(affected)


    var dataUtils=new DataUtils();
    dataUtils.mergeJSON(players,affected,"ID");
    
    var teams=new Teams(players,{
        container:"#premierLeague"
    });

    /*
    d3.json("http://localhost:8080/?match_id="+pa_ids[7],function(data){

        new Partnerships(data,{
            container:"#matches"
        });

    });
    */
}
