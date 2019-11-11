"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let team = require("./team.json");
let teams = Object.keys(team);
let getTeamL = (selectedTeam) => {
    return team[teams[selectedTeam]].length;
};
exports.getRandomPlayer = () => {
    let randTeam = Math.floor(Math.random() * teams.length);
    let teamL = getTeamL(randTeam);
    let randPlayer = Math.floor(Math.random() * teamL);
    let player = team[teams[randTeam]][randPlayer];
    return [teams[randTeam], player];
};
exports.getRandomPlayerByTeam = (selectedTeam) => {
    let teamL = getTeamL(selectedTeam);
    let randPlayer = Math.floor(Math.random() * teamL);
    let player = team[teams[selectedTeam]][randPlayer];
    return [teams[selectedTeam], player];
};
exports.isTeamPresent = (selectedTeam) => {
    return Boolean(team[selectedTeam]);
    /*if (teams.find(item => item === selectedTeam))
    return true;
    else return false;*/
};
exports.getTeamByPlayer = (selectedPlayer) => {
    for (let i = 0; i < teams.length; i++)
        for (let j = 0; j < team[teams[i]].length; j++) {
            if (team[teams[i]][j]["name"] == selectedPlayer.name && team[teams[i]][j]["surname"] == selectedPlayer.surname)
                return teams[i];
        }
    return false;
};
exports.getAllTeams = () => {
    let teamsDisplay = [];
    for (let i = 0; i < teams.length; i++)
        teamsDisplay.push(teams[i]);
    return teamsDisplay;
};
exports.getPlayersByTeam = (selectedTeam) => {
    let players = team[teams[selectedTeam]];
    return players;
};
exports.getAllPlayers = () => {
    let players = [];
    for (let i = 0; i < teams.length; i++)
        players.push(team[teams[i]]);
    return players;
};
exports.getPlayerByRole = (selectedRole) => {
    let playersArray = [];
    for (let i = 0; i < teams.length; i++)
        for (let j = 0; j < team[teams[i]].length; j++)
            if (team[teams[i]][j]["role"] == selectedRole)
                playersArray.push(team[teams[i]][j]);
    if (playersArray === [])
        return "No role with that name";
    else
        return playersArray;
};
//# sourceMappingURL=index.js.map