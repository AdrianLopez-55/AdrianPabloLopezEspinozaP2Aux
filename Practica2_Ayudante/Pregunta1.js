const game = {
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund', 
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski', ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt', 
    'Sancho', 
    'Gotze', ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'], 
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33, x: 3.25, team2: 6.5,
    }, };

//---------- TAREA 1 ----------
let players1 = [...game.players[0]];
let players2 = [...game.players[1]];
//console.log(players1);
//console.log(players2);

//---------- TAREA 2 ----------
let [gk] = players1;

//let allPlayers = [...players1, ]
const fieldPlayers = (gk) => {
    if(players1.includes(gk)){
        players1.shift();
    }
    return players1
}
//console.log(gk);
//console.log(fieldPlayers(gk));

//---------- TAREA 3 ----------
const allPlayers = [...game.players[0], players2];
//console.log(allPlayers);

//---------- TAREA 4 ----------
const players1Final = [...game.players[0], "Thiago", `Coutinho`, `Perisic`];
//console.log(players1Final)

//---------- TAREA 5 ----------
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;
//console.log(team1)
//console.log(draw)
//console.log(team2)

//---------- TAREA 7 ----------
const winOdds = (t1, t2) => {
    let comp1= t1;
    let comp2=t2;
    let comp3=false;
    switch(true){
        case comp1<comp2:
            comp3=true;
            comp3=""
            console.log(`El equipo 1 tiene ${comp1}`);
            break;
        case comp2<comp1:
            console.log(`El equipo 2 tiene ${comp2}`);
            comp3=true;
            comp3=""
            break;
    }
    return comp3;
}
console.log(winOdds(team1, team2));

//---------- TAREA 8 ----------
const promed = [team1, draw, team2];
console.log(promed);
console.log(promed.length)
let promm = 0;
for(let i=0; i<promed.length;i++){
    promm += promed[i]/3;
}
console.log(promm);
