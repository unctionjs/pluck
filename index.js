import dig from "@unction/dig"
import mapValues from "@unction/mapvalues"

import type {KeyChainType} from "types"
import type {UnaryFunctionType} from "types"
import type {KeyedEnumerableType} from "types"

export default function pluck (keychain: KeyChainType): UnaryFunctionType {
  return function pluckKeychain (functor: KeyedEnumerableType): KeyedEnumerableType {
    return mapValues(dig(keychain))(functor)
  }
}
