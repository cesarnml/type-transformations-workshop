import { Equal, Expect } from '../helpers/type-utils'

type CreateDataShape<
  T extends string | number | boolean,
  E extends TypeError | Error | SyntaxError,
> = {
  data: T
  error: E
}

type tests = [
  Expect<
    Equal<
      CreateDataShape<string, TypeError>,
      {
        data: string
        error: TypeError
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<number, Error>,
      {
        data: number
        error: Error
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean
        error: SyntaxError
      }
    >
  >,
]
