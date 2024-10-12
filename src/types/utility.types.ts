/**
 * A utility type that represents the return type of a function which can either return a value of type `T` or an error of type `E`.
 *
 * @template T - The type of the successful return value.
 * @template E - The type of the error, defaults to `Error`.
 *
 * @example
 * ```typescript
 * function exampleFunction(): TFunctionReturn<string> {
 *   if (someCondition) {
 *     return [null, new Error('An error occurred')];
 *   }
 *   return ['Success'];
 * }
 * ```
 */

export type TFunctionReturn<T, E = Error> = [T | null] | [null, E];

/**
 * Excludes `undefined` from the given type `T`.
 *
 * This utility type will transform a type `T` by removing `undefined` from it.
 * If `T` is `undefined`, it will result in `never`.
 *
 * @template T - The type from which `undefined` should be excluded.
 * @example
 * ```typescript
 * type A = NonUndefined<string | undefined>; // string
 * type B = NonUndefined<number | undefined>; // number
 * type C = NonUndefined<undefined>; // never
 * ```
 */
export type NonUndefined<T> = T extends undefined ? never : T;
