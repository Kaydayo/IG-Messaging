// import { ExecutionContext, Injectable } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { GqlExecutionContext } from '@nestjs/graphql';

// @Injectable()
// export class SupabaseGuard extends AuthGuard('supabase') {
//     getRequest(context: ExecutionContext) {
//         const ctx = GqlExecutionContext.create(context);
//         return ctx.getContext().req;
//     }
// }