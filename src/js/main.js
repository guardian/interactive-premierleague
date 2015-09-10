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
    
    new Teams("#premierLeague"+chart, param);
}
