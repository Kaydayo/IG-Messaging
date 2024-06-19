import { User as LoggedInUser } from './src/supabase-types';

declare global {
    namespace Express {
        export interface Request {
            user?: LoggedInUser;
        }
    }
}

export { };
