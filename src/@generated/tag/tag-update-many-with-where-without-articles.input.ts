import { Field, InputType } from '@nestjs/graphql';

import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyMutationInput } from './tag-update-many-mutation.input';

@InputType()
export class TagUpdateManyWithWhereWithoutArticlesInput {
    @Field(() => TagScalarWhereInput, {
        nullable: true,
    })
    where?: TagScalarWhereInput;

    @Field(() => TagUpdateManyMutationInput, {
        nullable: true,
    })
    data?: TagUpdateManyMutationInput;
}
