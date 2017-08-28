import keyChain from "@unction/keychain"
import mapValues from "@unction/mapvalues"

export default function pluck (keychain: KeyChainType): Function {
  return function pluckKeychain (functor: FunctorType): FunctorType {
    return mapValues(keyChain(keychain))(functor)
  }
}
