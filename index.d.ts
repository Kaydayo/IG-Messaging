import { User as LoggedInUser } from "./src/common/schema/user";
declare global {
    namespace Express {
        export interface Request {
            user?: {
                user: LoggedInUser,
                accessToken:string
            };
        }
    }
}

export { };
