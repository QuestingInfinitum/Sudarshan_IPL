function topEconomicBowlersIn2015(matches,deliveries)
{
    const run = {};
    const ball ={};
    const result = {};
    for (let match of matches)
    {
        if (match.season == 2015)
        {   const year = match.season;
            const ID = match.id;          
            for(let delivery of deliveries)
            {  
                const bowler = delivery.bowler; 
                if (delivery.match_id == ID)
                {
                    if (run[bowler])
                    {                           
                        run[bowler] += parseInt(delivery.total_runs);
                        ball[bowler] += 1;
                    }
                    else 
                    {                           
                        run[bowler] = parseInt(delivery.total_runs);
                        ball[bowler] = 1;
                    }
                }
            }
        }
    }
                    for (let b of Object.keys(ball))
                    {
                        result[b] = parseFloat((run[b]*6/ball[b]).toFixed(2));   
                    }
            
                    var sortable = [];
                    for (var key in result) {
                        sortable.push([key, result[key]]);
                    }
                                    
                    sortable.sort(function(a, b) {
                        return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0));
                    });
                    
                    const r = sortable.slice(0,10);
                    var fr = {};
                    for (let i in r) {
                        fr[r[i][0]] = r[i][1];
                    }
return fr;                    
                
}
    


module.exports = topEconomicBowlersIn2015;