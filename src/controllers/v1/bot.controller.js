import { ApiError } from "../../utils/apiError.js"
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/apiResponse.js";


export const getBotMove = asyncHandler(async (req, res) => {
    const botMove = Math.floor(Math.random() * 13);
    console.log(botMove);
    
    if (botMove < 0 && botMove > 13) {
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
