// Generatore random di calciatori
// Generatore random di calciatori selezionando  una squadra
// Team available
// Squadra in base al calciatore
// Lista delle squadre
// Lista di tutti i calciatori di una squadra
// Lista di tutti i calciatori
// Calciatori in base al ruolo
//
interface Player{
    name:string,
    surname:string,
    role:string
}
let team = require ("./team.json");
let teams = Object.keys(team);
let getTeamL = (selectedTeam:number) => {
    return team[teams[selectedTeam]].length;    
}
export let getRandomPlayer = () => {
    let randTeam = Math.floor(Math.random()* teams.length);
    let teamL = getTeamL(randTeam);
    let randPlayer = Math.floor(Math.random()* teamL);
    let player = team[teams[randTeam]][randPlayer];
    return [teams[randTeam], player];
}

export let getRandomPlayerByTeam = (selectedTeam:number) => {
    let teamL = getTeamL(selectedTeam);
    let randPlayer = Math.floor(Math.random()* teamL);
    let player = team[teams[selectedTeam]][randPlayer];
    return [teams[selectedTeam], player];
}

export let isTeamPresent = (selectedTeam:string) =>{
    return Boolean(team[selectedTeam]);
    /*if (teams.find(item => item === selectedTeam))
    return true;
    else return false;*/
}

export let getTeamByPlayer = (selectedPlayer:Player) =>{
    for (let i=0; i<teams.length;i++)
     for (let j=0; j<team[teams[i]].length;j++){
     if (team[teams[i]][j]["name"] == selectedPlayer.name && team[teams[i]][j]["surname"] == selectedPlayer.surname) return teams[i];
     }
    return false;
}

export let getAllTeams = () =>{
    let teamsDisplay:string[] = [];
    for (let i=0; i<teams.length; i++)
    teamsDisplay.push(teams[i]);
    return teamsDisplay;
}

export let getPlayersByTeam = (selectedTeam:number) =>{
    let players = team[teams[selectedTeam]];
    return players;
}
export let getAllPlayers= () =>{
    let players:string[] = [];
    for (let i=0; i<teams.length; i++)
    players.push(team[teams[i]]);
    return players;
}
export let getPlayerByRole = (selectedRole:string) =>{
    let playersArray = [];
    for (let i=0; i<teams.length;i++)
     for (let j=0; j<team[teams[i]].length;j++)
     if (team[teams[i]][j]["role"] == selectedRole)
     playersArray.push(team[teams[i]][j]);
    if (playersArray === [])    return "No role with that name";
    else return playersArray;
}
export{}