import { Field, HideField, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ArticleCreateManyAuthorInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    slug!: string;

    @Field(() => String, { nullable: false })
    title!: string;

    @Field(() => String, { nullable: false })
    description!: string;

    @Field(() => String, { nullable: false })
    body!: string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;

    @Field(() => Int, { nullable: true })
    favoritesCount?: number;

    @Field(() => Boolean, { nullable: true })
    active?: boolean;
}
