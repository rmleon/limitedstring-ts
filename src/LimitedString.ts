/**
 * A branded type representing a string that is limited to a specific maximum length.
 *
 * This type is used to create strings that are limited to a maximum length `T`.
 * It incorporates a `__length__` property to associate the length constraint, and
 * uses a unique `__brand` to ensure that only strings created by a specific function
 * (e.g., `createLimitedString`) can be considered of this type.
 *
 * @template T - The maximum allowable length of the string.
 * 
 * @remarks
 * - This type cannot be directly assigned to a plain string. It must be created
 *   through a function (like `createLimitedString`) that enforces the length constraint.
 * - The `__brand` property is a unique symbol that prevents direct assignment or creation
 *   of this type outside the intended utility functions.
 * 
 * @example
 * // Using the `createLimitedString` function to create a `LimitedString`:
 * const myLimitedString: LimitedString<10> = createLimitedString("Hello", 10);
 */
export type LimitedString<T extends number> = string & { __length__: T } & { readonly __brand: unique symbol };

/**
 * Creates a string that is limited to a maximum length. Throws an error if the input string exceeds the specified length.
 *
 * @template T - The maximum length of the string (must be a number).
 * @param {string} str - The input string to be limited in length.
 * @param {T} maxLength - The maximum allowable length for the string.
 * @returns {LimitedString<T>} - A string that is guaranteed not to exceed the specified maximum length.
 * 
 * @throws {Error} Throws an error if the input string's length exceeds `maxLength`.
 * 
 * @example
 * // Valid usage:
 * const shortString = createLimitedString("Hello", 10); // Works fine
 * 
 * @example
 * // Error thrown:
 * const longString = createLimitedString("This is too long", 5); // Throws an error
 */
export function createLimitedString<T extends number>(str: string, maxLength: T): LimitedString<T> {
    if (str.length > maxLength) {
        throw new Error(`String exceeds the maximum length of ${maxLength} characters.`);
    }
    return str as LimitedString<T>;
}
