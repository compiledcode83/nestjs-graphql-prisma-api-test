import { registerEnumType } from '@nestjs/graphql';

export enum UserDistinctFieldEnum {
    id = 'id',
    email = 'email',
    name = 'name',
    password = 'password',
    bio = 'bio',
    image = 'image',
    countComments = 'countComments',
}

registerEnumType(UserDistinctFieldEnum, { name: 'UserDistinctFieldEnum', description: undefined });
