import catchAsync from "../utils/catchAsync"


const auth = () => {
    return catchAsync(async (req, res, next) => {
        const token = req.headers.authorization;
        // console.log(token);
        
        // checking if the token is missing
        if (!token) {
            throw new Error('You are not authorized')
        }

        next();
    })
}

export default auth;