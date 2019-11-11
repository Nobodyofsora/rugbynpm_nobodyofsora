interface Player {
    name: string;
    surname: string;
    role: string;
}
export declare let getRandomPlayer: () => any[];
export declare let getRandomPlayerByTeam: (selectedTeam: number) => any[];
export declare let isTeamPresent: (selectedTeam: string) => boolean;
export declare let getTeamByPlayer: (selectedPlayer: Player) => string | false;
export declare let getAllTeams: () => string[];
export declare let getPlayersByTeam: (selectedTeam: number) => any;
export declare let getAllPlayers: () => string[];
export declare let getPlayerByRole: (selectedRole: string) => any[] | "No role with that name";
export {};
//# sourceMappingURL=index.d.ts.map