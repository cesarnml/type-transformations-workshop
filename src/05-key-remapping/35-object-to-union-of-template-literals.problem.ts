import { Equal, Expect } from '../helpers/type-utils'

interface FruitMap {
  apple: 'red'
  banana: 'yellow'
  orange: 'orange'
}

type TransformedFruit = keyof { [K in keyof FruitMap as `${K}:${FruitMap[K]}`]: FruitMap[K] }

type tests = [Expect<Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>>]
