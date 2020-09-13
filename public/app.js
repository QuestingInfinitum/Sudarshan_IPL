function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  visualizeExtraRunConcededByTeam(data.extraRunsConcededByEachTeam); 
  visualizeTopEconomicalBowlersIn2015(data.topEconomicalBowlersIn2015);
  visualizeTopStrikeRateBatsmanIn2017(data.topStrikeRateBatsmanIn2017);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) 
{
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);  
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}


function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) 
{
  const seriesData = [];
  const teams = [];
  for(let t in matchesWonByEachTeam)
  {
    teams.push(...Object.keys(matchesWonByEachTeam[t]));
  }
  const ut = new Set(teams);
  for (let u of ut)
  {
    let num = [];
    for (let t in matchesWonByEachTeam)
    {
      if (matchesWonByEachTeam[t].hasOwnProperty(u))
      {
        num.push(matchesWonByEachTeam[t][u]);
      }
      else
      {
        num.push(0);
      }
    }
    seriesData.push({name:u, data:num});
  }
  
  Highcharts.chart("matches-won-by-each-team", {
    chart: {
        type: "column"
    },
    title: {
        text: "2. Matches Won By Each Team"
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories:Object.keys(matchesWonByEachTeam),
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches Won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesData
  });

}


function visualizeExtraRunConcededByTeam(extraRunsConcededByEachTeam) 
{
  const seriesData = [];
  for (let team in extraRunsConcededByEachTeam ) {
    seriesData.push([team, extraRunsConcededByEachTeam[team]]);
  }

  Highcharts.chart("extra-runs-conceded-by-each-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra Runs Conceded By Teams in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}



function visualizeTopEconomicalBowlersIn2015(topEconomicalBowlersIn2015) 
{
  const seriesData = [];
  for (let bowler in topEconomicalBowlersIn2015) {
    seriesData.push([bowler, topEconomicalBowlersIn2015[bowler]]);
  }

  Highcharts.chart("top-economic-bowlers-in-2015", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top Economic Bowlers in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowler",
        data: seriesData
      }
    ]
  });
}

function visualizeTopStrikeRateBatsmanIn2017(topStrikeRateBatsmanIn2017) 
{
  const seriesData = [];
  for (let batsman in topStrikeRateBatsmanIn2017) {
    seriesData.push([batsman, topStrikeRateBatsmanIn2017[batsman]]);
  }

  Highcharts.chart("top-strike-rate-batsman-in-2017", {
    chart: {
      type: "column"
    },
    title: {
      text: "5. Story : Top Strike Rate Batsman In 2017"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Strike-Rate"
      }
    },
    series: [
      {
        name: "Batsman",
        data: seriesData
      }
    ]
  });
}

