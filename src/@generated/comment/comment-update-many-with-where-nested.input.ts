import { InputType, Field } from '@nestjs/graphql';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpdateManyDataInput } from './comment-update-many-data.input';

@InputType({})
export class CommentUpdateManyWithWhereNestedInput {
    @Field(() => CommentScalarWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentScalarWhereInput | null;

    @Field(() => CommentUpdateManyDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: CommentUpdateManyDataInput | null;
}
