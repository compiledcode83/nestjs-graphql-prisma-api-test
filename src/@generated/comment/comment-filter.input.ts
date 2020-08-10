import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';

@InputType({})
export class CommentFilter {
    @Field(() => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: CommentWhereInput | null;

    @Field(() => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: CommentWhereInput | null;

    @Field(() => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: CommentWhereInput | null;
}
