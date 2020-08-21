import { InputType, Field } from '@nestjs/graphql';

@InputType({})
export class NullableBooleanFilter {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    equals?: boolean | null;

    @Field(() => NullableBooleanFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NullableBooleanFilter | null;
}
