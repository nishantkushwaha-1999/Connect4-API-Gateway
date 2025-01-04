import { ApiError } from "../../utils/apiError.js"
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import jwt from "jsonwebtoken";

import { GameStatsLogs } from "../../models/gameStatsLogModel.js";
import { promises as fs } from "fs";


export const getGameStatLogs = asyncHandler(async (req, res) => {
    try {
        const gameStatLogs = JSON.parse(await fs.readFile(process.env.VIEWS_LOG_PATH, 'utf-8'));
        return res
            .status(200)
            .json(
                new ApiResponse(200, gameStatLogs, "Fetched logs")
            )
    } catch (error) {
        console.log("       Error reading data:\n", process.env.VIEWS_LOG_PATH, "\n", error);
        throw new ApiError(500, `Something went wrong on the server.`);
    }
});

export const pageVisit = asyncHandler(async (req, res) => {
    console.log(req.json());
    try {
        let gameStatLogs = JSON.parse(await fs.readFile(process.env.VIEWS_LOG_PATH, 'utf-8'));
        gameStatLogs.pageVisits += 1;

        fs.writeFile(process.env.VIEWS_LOG_PATH, JSON.stringify(gameStatLogs))
        return res
            .status(200)
            .json(
                new ApiResponse(200, gameStatLogs, "Fetched logs")
            )
    } catch (error) {
        console.log("       Error reading data:\n", process.env.VIEWS_LOG_PATH, "\n", error);
        throw new ApiError(500, `Something went wrong on the server.`);
    }
});

export const gamePlayed = asyncHandler(async (req, res) => {
    try {
        let gameStatLogs = JSON.parse(await fs.readFile(process.env.VIEWS_LOG_PATH, 'utf-8'));
        gameStatLogs.gamesPlayed += 1;

        fs.writeFile(process.env.VIEWS_LOG_PATH, JSON.stringify(gameStatLogs))
        return res
            .status(200)
            .json(
                new ApiResponse(200, gameStatLogs, "Fetched logs")
            )
    } catch (error) {
        console.log("       Error reading data:\n", process.env.VIEWS_LOG_PATH, "\n", error);
        throw new ApiError(500, `Something went wrong on the server.`);
    }
});

export const botWins = asyncHandler(async (req, res) => {
    try {
        let gameStatLogs = JSON.parse(await fs.readFile(process.env.VIEWS_LOG_PATH, 'utf-8'));
        gameStatLogs.gamesWonByBot += 1;

        fs.writeFile(process.env.VIEWS_LOG_PATH, JSON.stringify(gameStatLogs))
        return res
            .status(200)
            .json(
                new ApiResponse(200, gameStatLogs, "Fetched logs")
            )
    } catch (error) {
        console.log("       Error reading data:\n", process.env.VIEWS_LOG_PATH, "\n", error);
        throw new ApiError(500, `Something went wrong on the server.`);
    }
});
