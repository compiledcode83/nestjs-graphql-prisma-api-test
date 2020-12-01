import { Field, InputType } from '@nestjs/graphql';

import { QueryMode } from './query-mode.enum';

@InputType()
export class StringFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: string;

    @Field(() => [String], {
        nullable: true,
    })
    in?: Array<string>;

    @Field(() => [String], {
        nullable: true,
    })
    notIn?: Array<string>;

    @Field(() => String, {
        nullable: true,
    })
    lt?: string;

    @Field(() => String, {
        nullable: true,
    })
    lte?: string;

    @Field(() => String, {
        nullable: true,
    })
    gt?: string;

    @Field(() => String, {
        nullable: true,
    })
    gte?: string;

    @Field(() => String, {
        nullable: true,
    })
    contains?: string;

    @Field(() => String, {
        nullable: true,
    })
    startsWith?: string;

    @Field(() => String, {
        nullable: true,
    })
    endsWith?: string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    not?: string | StringFilter;
}
