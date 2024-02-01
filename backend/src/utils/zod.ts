/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

export const zodProperty = {
  nonEmptyString: (
    param: string, // Must be a non-empty string.
  ) => z.string().min(1, { message: `\`${param}\` must be a non-empty string.` }),
  numberQueryParam: (
    param: string, // Must be a number.
  ) =>
    z.string().refine((value) => !Number.isNaN(value), {
      message: `\`${param}\` must be a number.`,
    }),
  optionalNumberQueryParam: (
    param: string, // Must be a number or undefined.
  ) =>
    z
      .string()
      .optional()
      .refine((value) => value === undefined || !Number.isNaN(value), {
        message: `\`${param}\` must be a number.`,
      }),
};

// Remove undefined or empty string properties of an object. Use in the .transform method of zod
export const transform_removeUndefinedProps = <T extends Record<string, any>>(
  obj: T,
): Partial<T> => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== '') {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as Partial<T>);
};

// Require at least one property to be defined. Use in the .refine method of zod
export const refine_atLeastOneNonEmpty = (keys: string[]) => {
  return (data: Record<string, any>) => {
    const nonEmptyValues = keys.filter((key) => data[key] !== undefined && data[key].trim() !== '');
    // Check that at least one value is non-empty.
    return nonEmptyValues.length > 0;
  };
};
