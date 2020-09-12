function matchesWonByEachTeam(matches)
{
  const won = {};
  for (let match of matches) 
  {
  const year = match.season;
  const winner = match.winner;
  
      if (!won.hasOwnProperty(year)) 
      {
        won[year] = {};       
      } 
      if (won[year].hasOwnProperty(winner))
       {
        won[year][winner] = won[year][winner] +1 ;
       }
      else 
      {
        won[year][winner] = 1;
      } 
  }
     return won;
}
module.exports = matchesWonByEachTeam;