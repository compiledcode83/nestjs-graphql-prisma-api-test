import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { CommentUncheckedCreateManyWithoutAuthorInput } from '../comment/comment-unchecked-create-many-without-author.input';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserUncheckedCreateWithoutArticlesInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: false,
    })
    email!: string;

    @Field(() => String, {
        nullable: false,
    })
    name!: string;

    @Field(() => String, {
        nullable: false,
    })
    password!: string;

    @Field(() => String, {
        nullable: true,
    })
    bio?: string;

    @Field(() => String, {
        nullable: true,
    })
    image?: string;

    @Field(() => Int, {
        nullable: true,
    })
    countComments?: number;

    @Field(() => Float, {
        nullable: true,
    })
    rating?: number;

    @Field(() => Role, {
        nullable: true,
    })
    role?: Role;

    @Field(() => CommentUncheckedCreateManyWithoutAuthorInput, {
        nullable: true,
    })
    comments?: CommentUncheckedCreateManyWithoutAuthorInput;
}
