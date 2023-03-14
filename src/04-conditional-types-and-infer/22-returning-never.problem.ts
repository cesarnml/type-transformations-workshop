import { Equal, Expect } from '../helpers/type-utils'

type Options = 'hello' | 'goodbye'
type YouSayGoodbyeAndISayHello<T> = T extends Options ? Exclude<Options, T> : never

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'alright pal'>, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
]
