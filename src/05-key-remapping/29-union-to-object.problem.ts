import { Equal, Expect } from '../helpers/type-utils'

type Routes = '/' | '/about' | '/admin' | '/admin/users'

type RoutesObject = { [Route in Routes]: Route }

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': '/'
        '/about': '/about'
        '/admin': '/admin'
        '/admin/users': '/admin/users'
      }
    >
  >,
]
