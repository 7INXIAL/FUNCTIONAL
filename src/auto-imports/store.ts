import { useSnapshot, INTERNAL_Snapshot } from "valtio";

const store = {} as INTERNAL_STORE;

const files: {
  (key: string): {
    default: NonNullable<any>;
  };
  keys: {
    (): Array<string>;
  };
} = require.context("../modules", true, /store\.ts$/);

files.keys().forEach((url) => {
  const _k = url.replace(/store\.ts|\.?\/?/g, "");
  store[<keyof INTERNAL_STORE>_k] = files(url).default;
});

export const useStore = (
  key: keyof INTERNAL_STORE
): [
  INTERNAL_Snapshot<INTERNAL_STORE[keyof INTERNAL_STORE]>, // readonly and updete view
  INTERNAL_STORE[keyof INTERNAL_STORE] // update store
] => {
  if (!key) throw new Error("请输入你要使用 Store 的模块名称");
  if (key in store) {
    const _store = store[key];
    return [useSnapshot(_store), _store];
  }
  throw new Error(`模块 ${key} 尚未定义 Store`);
};
