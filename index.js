const fs = require("fs");
const csv = require("csvtojson");

const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRunsConcededByEachTeam = require("./ipl/extraRunsConcededByEachTeam");
const topEconomicalBowlersIn2015 = require("./ipl/topEconomicalBowlersIn2015");
const topStrikeRateBatsmanIn2017 = require("./ipl/topStrikeRateBatsmanIn2017");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches =>  {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        
        let result = {};

        result.matchesPlayedPerYear = matchesPlayedPerYear(matches);
        result.matchesWonByEachTeam  = matchesWonByEachTeam(matches);
        result.extraRunsConcededByEachTeam = extraRunsConcededByEachTeam(matches,deliveries);
        result.topEconomicalBowlersIn2015 = topEconomicalBowlersIn2015(matches,deliveries);
        result.topStrikeRateBatsmanIn2017 = topStrikeRateBatsmanIn2017(matches,deliveries);
       
        saveData(result);
        //console.log(result)
      
      });
      
    });  
}


function saveData(result) {
  const jsonData = result;

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();

