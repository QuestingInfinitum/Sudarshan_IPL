function topStrikeRateBatsmanIn2017(matches,deliveries)
{
    const run = {};
    const ball ={};
    const result = {};
    for (let match of matches)
    {
        if (match.season == 2017)
        {
            const ID = match.id;          
            for(let delivery of deliveries)
            {  
                const batsman = delivery.batsman; 
                if (delivery.match_id == ID)
                {
                    if (run[batsman])
                    {                           
                        run[batsman] += parseInt(delivery.batsman_runs);
                        ball[batsman] += 1;
                    }
                    else 
                    {                           
                        run[batsman] = parseInt(delivery.batsman_runs);
                        ball[batsman] = 1;
                    }
                }
            }
        }
    }
                    for (let b of Object.keys(ball))
                    {   
                        if (run[b] > 300)
                        {
                        result[b] = parseFloat((run[b]*100/ball[b]).toFixed(2));
                        }   
                    }

                    var sortable = [];
                    for (var key in result) {
                        sortable.push([key, result[key]]);
                    }
                                    
                    sortable.sort(function(a, b) {
                        return (a[1] > b[1] ? -1 : (a[1] > b[1] ? 1 : 0));
                    });
                    
                    const r = sortable.slice(0,10);
                    var fr = {};
                    for (var idx in r) {
                        fr[r[idx][0]] = r[idx][1];
                    }
            
           return fr;
}

module.exports = topStrikeRateBatsmanIn2017;