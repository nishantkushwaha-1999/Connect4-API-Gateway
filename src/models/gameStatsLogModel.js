import { readFile, writeFile } from "fs";
import { exit } from "process";

export class GameStatsLogs {
    gameLogs = {
        "pageVisits": undefined,
        "gamesPlayed": undefined,
        "gamesWonByBot": undefined
    }

    constructor() {
        this.readLogs();
        this.gameLogs.gamesPlayed = 100;
    }

    readLogs(path=process.env.VIEWS_LOG_PATH) {
        readFile(path, 'utf-8', (err, data) => {
            if (!err) {
                this.gameLogs = JSON.parse(data);
                this.gameLogs.gamesWonByBot = 90;
                
            } else {
                console.log("       Error Reading File:\n", err);
            }
        });
    }
}