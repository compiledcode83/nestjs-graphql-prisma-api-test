import { ObjectType, ID, Field, Int } from '@nestjs/graphql';
import { Tag } from '../tag/tag.model';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';

@ObjectType({
    description: undefined,
})
export class Article {
    @Field(() => ID, {
        nullable: false,
        description: undefined,
    })
    id!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    slug!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    title!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    description!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    body!: string;

    @Field(() => [Tag], {
        nullable: true,
        description: undefined,
    })
    tags?: Tag[] | null;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    createdAt!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    updatedAt!: string;

    @Field(() => Int, {
        nullable: false,
        defaultValue: 0,
        description: undefined,
    })
    favoritesCount!: number;

    @Field(() => User, {
        nullable: false,
        description: undefined,
    })
    author!: User;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    readonly authorId!: string;

    @Field(() => [User], {
        nullable: true,
        description: undefined,
    })
    favoritedBy?: User[] | null;

    @Field(() => [Comment], {
        nullable: true,
        description: undefined,
    })
    comments?: Comment[] | null;

    @Field(() => Boolean, {
        nullable: true,
        defaultValue: true,
        description: undefined,
    })
    active?: boolean | null;
}
