import dig from "@unction/dig";
import mapValues from "@unction/mapvalues";
import {KeyChainType} from "./types";
import {KeyedEnumerableType} from "./types";

export default function pluck<A, B> (keychain: KeyChainType<A>) {
  return function pluckKeychain (enumerable: KeyedEnumerableType<B, A>): Array<B> {
    return mapValues(dig(keychain))(enumerable);
  };
}
