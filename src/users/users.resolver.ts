import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  @Query((returns) => Boolean)
  isUsers(): Boolean {
    return true;
  }
}
