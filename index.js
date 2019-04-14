import dig from "@unction/dig";
import mapValues from "@unction/mapvalues";
export default function pluck (keychain) {
  return function pluckKeychain (functor) {
    return mapValues(dig(keychain))(functor);
  };
}
