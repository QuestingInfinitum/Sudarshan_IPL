function topEconomicBowlersByYear(matches,deliveries)
{    
    const ball ={};
    const result = {};
    const all_year_economy = {}; 
    
    for (let match of matches)
    {
            const year = match.season;
            const ID = match.id;          
            for(let delivery of deliveries)
            {  
                const bowler = delivery.bowler; 
                if (delivery.match_id == ID)
                {   
                    if (!result.hasOwnProperty(year) || !ball.hasOwnProperty(year)) 
                    {
                        result[year] = {};
                        ball[year] = {};       
                    } 
                    if (result[year][bowler] || ball[year][bowler] )
                    {                           
                        result[year][bowler] += parseInt(delivery.total_runs);
                        ball[year][bowler] += 1;
                    }
                    else 
                    {                           
                        result[year][bowler] = parseInt(delivery.total_runs);
                        ball[year][bowler] = 1;
                    }
                }
            }
    }               
    var years = [];               
    for(let year of Object.keys(ball))
    {        
        let year_economy_object = {}; 
        for(let player_name of Object.keys(ball[year]))
        {   
            year_economy_object[player_name] = parseFloat(
                (result[year][player_name]*6/ball[year][player_name])
                .toFixed(2));   
        }
        all_year_economy[year]=year_economy_object;
        years.push(year);
    }

    var bowEco = {};
    for(let i=0;i<years.length;i++)
    {
        var sortable = [];
        let result = all_year_economy[years[i]];
        for (var key in result) 
        {
            sortable.push([key,result[key]]);
        }
                        
        sortable.sort(function(a, b) {
            return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0));
        });

        let r = sortable.slice(0,10);
   
        let data = {};
        for(let p =0;p<r.length;p++)
        {
            data[r[p][0]] = r[p][1];
        }
        bowEco[years[i]] = data;            
    }
    return bowEco;       
}

module.exports = topEconomicBowlersByYear;