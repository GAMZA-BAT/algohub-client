import { useEffect, useState } from "react";
import type { SafeParseReturnType, ZodSchema, ZodTypeDef } from "zod";

type Options = {
  asyncValidate?: boolean;
};

export const useZodHelper = <
  /** biome-ignore lint/suspicious/noExplicitAny: */
  Output = any,
  Def extends ZodTypeDef = ZodTypeDef,
  Input = Output,
>(
  schema: ZodSchema<Output, Def, Input>,
  value: Input,
  options?: Options,
) => {
  const [result, setResult] = useState<SafeParseReturnType<Input, Output>>();

  useEffect(() => {
    if (options?.asyncValidate) {
      schema.safeParseAsync(value).then(setResult);
    } else {
      const result = schema.safeParse(value);
      setResult(result);
    }
  }, [value]);

  return { result };
};
