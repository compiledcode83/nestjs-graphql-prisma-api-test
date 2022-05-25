import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutFavoritedByInput } from './article-create-or-connect-without-favorited-by.input';
import { ArticleUpsertWithWhereUniqueWithoutFavoritedByInput } from './article-upsert-with-where-unique-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutFavoritedByInput } from './article-update-with-where-unique-without-favorited-by.input';
import { ArticleUpdateManyWithWhereWithoutFavoritedByInput } from './article-update-many-with-where-without-favorited-by.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';

@InputType()
export class ArticleUncheckedUpdateManyWithoutFavoritedByInput {
  @Field(() => [ArticleCreateWithoutFavoritedByInput], { nullable: true })
  @Type(() => ArticleCreateWithoutFavoritedByInput)
  create?: Array<ArticleCreateWithoutFavoritedByInput>;

  @Field(() => [ArticleCreateOrConnectWithoutFavoritedByInput], { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutFavoritedByInput)
  connectOrCreate?: Array<ArticleCreateOrConnectWithoutFavoritedByInput>;

  @Field(() => [ArticleUpsertWithWhereUniqueWithoutFavoritedByInput], {
    nullable: true,
  })
  @Type(() => ArticleUpsertWithWhereUniqueWithoutFavoritedByInput)
  upsert?: Array<ArticleUpsertWithWhereUniqueWithoutFavoritedByInput>;

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

  @Field(() => [ArticleUpdateWithWhereUniqueWithoutFavoritedByInput], {
    nullable: true,
  })
  @Type(() => ArticleUpdateWithWhereUniqueWithoutFavoritedByInput)
  update?: Array<ArticleUpdateWithWhereUniqueWithoutFavoritedByInput>;

  @Field(() => [ArticleUpdateManyWithWhereWithoutFavoritedByInput], { nullable: true })
  @Type(() => ArticleUpdateManyWithWhereWithoutFavoritedByInput)
  updateMany?: Array<ArticleUpdateManyWithWhereWithoutFavoritedByInput>;

  @Field(() => [ArticleScalarWhereInput], { nullable: true })
  @Type(() => ArticleScalarWhereInput)
  deleteMany?: Array<ArticleScalarWhereInput>;
}
