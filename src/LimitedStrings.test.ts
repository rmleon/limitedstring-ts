import { createLimitedString, LimitedString } from "./LimitedString"

describe('createLimitedString', () => {
    test(`valid limited strings`, () => {
        const f = () => {
            return [createLimitedString("", 0),
            createLimitedString("", 1),
            createLimitedString("", 3),
            createLimitedString("a", 1),
            createLimitedString("a", 1)];
        };
        expect(f()).toHaveLength(5);
    });

    test(`invalid limited strings to throw an error`, () => {
        const f1 = () => createLimitedString("a", 0);
        const f2 = () => createLimitedString("ab", 1);
        const f3 = () => createLimitedString("abcd", 3);
        expect(f1).toThrowError();
        expect(f2).toThrowError();
        expect(f3).toThrowError();
    });

    test('it works with an input that exactly matches the maximum length', () => {
        const input = 'Hello';
        const maxLength = 5;
        const result = createLimitedString(input, maxLength);
        expect(result).toBe(input);
        const isLimitedString: LimitedString<typeof maxLength> = result;
        expect(isLimitedString).toBe(input);
    });

    test('it should handle empty strings correctly', () => {
        const result = createLimitedString('', 10);
        expect(result).toBe('');
        const isLimitedString: LimitedString<10> = result;
        expect(isLimitedString).toBe('');
    });
});