import dig from "@unction/dig";
import mapValues from "@unction/mapvalues";
import {KeyChainType} from "./types";

export default function pluck<A, B> (keychain: KeyChainType<A>) {
  return function pluckKeychain (enumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<B> {
    return mapValues(dig(keychain))(enumerable);
  };
}
