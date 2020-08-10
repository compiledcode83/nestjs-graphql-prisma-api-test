import { ObjectLiteralExpression, PropertyAssignment, StructureKind } from 'ts-morph';

type SetObjectPropertyArgs = {
    expression: ObjectLiteralExpression;
    name: string;
    value: string | number | boolean | undefined;
    defaultValue?: string | number | boolean;
};

export function setObjectProperty(args: SetObjectPropertyArgs) {
    const { expression, name, value, defaultValue } = args;
    let descriptionProperty = expression.getProperty(name) as PropertyAssignment | undefined;

    if (!descriptionProperty) {
        descriptionProperty = expression.addProperty({
            name,
            kind: StructureKind.PropertyAssignment,
            initializer: defaultValue !== undefined ? String(defaultValue) : 'undefined',
        }) as PropertyAssignment;
    }
    descriptionProperty.set({
        initializer:
            JSON.stringify(value) ||
            (defaultValue !== undefined ? String(defaultValue) : 'undefined'),
    });
}
