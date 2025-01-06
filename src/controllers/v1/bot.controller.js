import { ApiError } from "../../utils/apiError.js"
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/apiResponse.js";


export const getBotMove = asyncHandler(async (req, res) => {
    const botMove = await Math.floor(Math.random() * 14);
    
    if (!botMove) {
        throw new ApiError(500, `Something went wrong on the server`);
    } else {
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200, 
                    {"botMove": botMove}, 
                    "botPlayer played alpha Zero"
                )
            )
    }
});
