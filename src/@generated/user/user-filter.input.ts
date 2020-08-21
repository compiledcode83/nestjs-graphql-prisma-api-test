import { InputType, Field } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';

@InputType({})
export class UserFilter {
    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: UserWhereInput | null;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: UserWhereInput | null;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: UserWhereInput | null;
}
