import { Field, InputType, Int } from '@nestjs/graphql';

import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input';

@InputType()
export class ArticleCreateWithoutTagsInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: false,
    })
    slug!: string;

    @Field(() => String, {
        nullable: false,
    })
    title!: string;

    @Field(() => String, {
        nullable: false,
    })
    description!: string;

    @Field(() => String, {
        nullable: false,
    })
    body!: string;

    @Field(() => Date, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => Date, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => Int, {
        nullable: true,
    })
    favoritesCount?: number;

    @Field(() => Boolean, {
        nullable: true,
    })
    active?: boolean;

    @Field(() => UserCreateNestedOneWithoutArticlesInput, {
        nullable: false,
    })
    author!: UserCreateNestedOneWithoutArticlesInput;

    @Field(() => UserCreateNestedManyWithoutFavoriteArticlesInput, {
        nullable: true,
    })
    favoritedBy?: UserCreateNestedManyWithoutFavoriteArticlesInput;

    @Field(() => CommentCreateNestedManyWithoutArticleInput, {
        nullable: true,
    })
    comments?: CommentCreateNestedManyWithoutArticleInput;
}
