import { ClassDeclaration } from 'ts-morph';

/**
 * Generate property (field) for class.
 */
export function generateProperty(args: {
    propertyType: string[];
    isList: boolean;
    name: string;
    classDeclaration: ClassDeclaration;
    isNullable?: boolean;
    isId?: boolean;
}) {
    const { isNullable, propertyType, name, isList, classDeclaration } = args;
    const type = propertyType
        .map(type => (isList ? `Array<${type}>` : type))
        .join(' | ');

    return classDeclaration.addProperty({
        leadingTrivia: '\n',
        name,
        type,
        hasQuestionToken: isNullable,
        hasExclamationToken: !isNullable,
    });
}

// type GenerateClassProperty = {
//     classDeclaration: ClassDeclaration;
//     name: string;
//     type: string;
//     isRequired: boolean;
//     isReadOnly?: boolean;
// };

// export function generateClassProperty(args: GenerateClassProperty) {
//     const { type, isRequired, name, classDeclaration, isReadOnly } = args;
//     return classDeclaration.addProperty({
//         leadingTrivia: '\n',
//         name,
//         type,
//         hasQuestionToken: !isRequired,
//         hasExclamationToken: isRequired,
//         isReadonly: isReadOnly,
//     });
// }
