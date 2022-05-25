import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutTagsInput } from './article-create-or-connect-without-tags.input';
import { ArticleUpsertWithWhereUniqueWithoutTagsInput } from './article-upsert-with-where-unique-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutTagsInput } from './article-update-with-where-unique-without-tags.input';
import { ArticleUpdateManyWithWhereWithoutTagsInput } from './article-update-many-with-where-without-tags.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';

@InputType()
export class ArticleUncheckedUpdateManyWithoutTagsInput {
  @Field(() => [ArticleCreateWithoutTagsInput], { nullable: true })
  @Type(() => ArticleCreateWithoutTagsInput)
  create?: Array<ArticleCreateWithoutTagsInput>;

  @Field(() => [ArticleCreateOrConnectWithoutTagsInput], { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutTagsInput)
  connectOrCreate?: Array<ArticleCreateOrConnectWithoutTagsInput>;

  @Field(() => [ArticleUpsertWithWhereUniqueWithoutTagsInput], { nullable: true })
  @Type(() => ArticleUpsertWithWhereUniqueWithoutTagsInput)
  upsert?: Array<ArticleUpsertWithWhereUniqueWithoutTagsInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  set?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  disconnect?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  delete?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleWhereUniqueInput], { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Array<ArticleWhereUniqueInput>;

  @Field(() => [ArticleUpdateWithWhereUniqueWithoutTagsInput], { nullable: true })
  @Type(() => ArticleUpdateWithWhereUniqueWithoutTagsInput)
  update?: Array<ArticleUpdateWithWhereUniqueWithoutTagsInput>;

  @Field(() => [ArticleUpdateManyWithWhereWithoutTagsInput], { nullable: true })
  @Type(() => ArticleUpdateManyWithWhereWithoutTagsInput)
  updateMany?: Array<ArticleUpdateManyWithWhereWithoutTagsInput>;

  @Field(() => [ArticleScalarWhereInput], { nullable: true })
  @Type(() => ArticleScalarWhereInput)
  deleteMany?: Array<ArticleScalarWhereInput>;
}
