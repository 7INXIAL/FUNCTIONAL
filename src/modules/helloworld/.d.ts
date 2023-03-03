export {};
// 定义 Store 数据
declare global {
  interface INTERNAL_STORE {
    helloworld: {
      text: string;
    };
  }
  interface INTERNAL_SERVICER {
    helloworld: {
      showhelloworld: () => Promise<any>;
    };
  }
}
