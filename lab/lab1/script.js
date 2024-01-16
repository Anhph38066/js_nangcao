const players1 = {
    gk: "Neuer",
    fieldPlayers: ["Davies", "Upamecano", "Hernandez", "Kimmich", "Goretzka", "Coman", "Gnabry", "Muller", "Sané", "Lewandowski"],
  };
  
  const players2 = {
    gk: "Oblak",
    fieldPlayers: ["Gimenez", "Savic", "Reinildo", "Lodi", "Koke", "Llorente", "Carrasco", "Felix", "Griezmann", "Suarez"],
  };
//
  const allPlayers = players1.fieldPlayers.concat(players2.fieldPlayers, players1.gk, players2.gk);
//
const players1Final = players1.fieldPlayers
  .filter((player) => player !== "Coman")
  .filter((player) => player !== "Gnabry")
  .filter((player) => player !== "Sané")
  .concat(["Thiago", "Coutinho", "Perisic"]);

players1Final.unshift(players1.gk);
//
const game = {
    odds: {
      team1: 2.2,
      draw: 3.4,
      team2: 2.8,
    },
    scored: {
      team1: ["Davies", "Muller", "Lewandowski", "Kimmich"], // Thay đổi dữ liệu theo thực tế
      team2: ["Suarez"],
    },
  };
  
  const team1 = game.odds.team1;
  const draw = game.odds.draw;
  const team2 = game.odds.team2;
  //
  function printGoals(...players) {
    console.log(`Số bàn thắng được ghi bởi:`);
    for (const player of players) {
      console.log(`- ${player}`);
    }
  }
  //
  const winningTeam = Math.min(team1, team2) === team1 ? "Bayern Munich" : "Atletico Madrid";

  console.log(`Đội chiến thắng là: ${winningTeam}`);
  //
  printGoals(...game.scored.team1, ...game.scored.team2);
  //
  const game2 = {
    scored: {
      team1: ["Davies", "Muller", "Lewandowski", "Kimmich"], // Thay đổi dữ liệu theo thực tế
      team2: ["Suarez"],
    },
  };
  
  for (const team of ["team1", "team2"]) {
    for (let i = 0; i < game2.scored[team].length; i++) {
      console.log(`Bàn thắng ${i + 1}: ${game2.scored[team][i]}`);
    }
  }
  //
  const game3 = {
    scored: {
      team1: ["Davies", "Muller", "Lewandowski", "Kimmich"], // Thay đổi dữ liệu theo thực tế
      team2: ["Suarez"],
    },
  };
  
  for (const team of ["team1", "team2"]) {
    for (let i = 0; i < game3.scored[team].length; i++) {
      console.log(`Bàn thắng ${i + 1}: ${game3.scored[team][i]}`);
    }
  }
  //
  function calculateScoreRatio(team1Goals, team2Goals) {
    const totalGoals = team1Goals + team2Goals;
    const team1Ratio = team1Goals / totalGoals;
    const drawRatio = (totalGoals - team1Goals - team2Goals) / totalGoals;
    const team2Ratio = team2Goals / totalGoals;
  
    return {
      team1: team1Ratio,
      draw: drawRatio,
      team2: team2Ratio,
    };
  }
  
  const scoreRatio = calculateScoreRatio(game.scored.team1.length, game.scored.team2.length);
  
  console.log(`Tỉ lệ thắng của ${game.team1}: ${scoreRatio.team1.toFixed(2)}`);
  console.log(`Tỉ lệ hòa: ${scoreRatio.draw.toFixed(2)}`);
  console.log(`Tỉ lệ thắng của ${game.team2}: ${scoreRatio.team2.toFixed(2)}`);
  //
  function printOdds(odds) {
    for (const team in odds) {
      console.log(`Tỉ lệ thắng của ${team}: ${odds[team].toFixed(2)}`);
    }
  }
  
  printOdds(game.odds);
  //
  const scorers = {};
for (const team of ["team1", "team2"]) {
  for (const player of game.scored[team]) {
    if (!scorers[player]) {
      scorers[player] = 0;
    }
    scorers[player]++;
  }
}

console.log(scorers);
  