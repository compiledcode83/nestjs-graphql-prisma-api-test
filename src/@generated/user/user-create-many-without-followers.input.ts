import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserCreateManyWithoutFollowersInput {
    @Field(() => [UserCreateWithoutFollowersInput], {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowersInput[] | null;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput[] | null;
}
