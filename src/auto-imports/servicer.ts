const servicer = {} as INTERNAL_SERVICER;

const files: {
  (key: string): {
    default: NonNullable<any>;
  };
  keys: {
    (): Array<string>;
  };
} = require.context("../modules", true, /service\.ts$/);

files.keys().forEach((url) => {
  const _k = url.replace(/service\.ts|\.?\/?/g, "");
  servicer[<keyof INTERNAL_SERVICER>_k] = files(url).default;
});

export const useServicer = (
  key: keyof INTERNAL_SERVICER
): INTERNAL_SERVICER[keyof INTERNAL_SERVICER] => {
  if (!key) throw new Error("请输入你要使用 Service 的模块名称");
  if (key in servicer) {
    return servicer[key];
  }
  throw new Error(`模块 ${key} 尚未定义 Service`);
};
