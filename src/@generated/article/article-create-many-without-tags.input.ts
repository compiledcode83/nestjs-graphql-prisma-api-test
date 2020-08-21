import { InputType, Field } from '@nestjs/graphql';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleCreateManyWithoutTagsInput {
    @Field(() => [ArticleCreateWithoutTagsInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutTagsInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput[] | null;
}
