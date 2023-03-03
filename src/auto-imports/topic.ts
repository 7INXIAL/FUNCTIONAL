interface INTERNAL_TOPIC {
  helloworld: {
    [key: string]: string;
  };
}
const topic: INTERNAL_TOPIC = {
  helloworld: {
    colorPrimary: "#fff",
  },
};

export const useTopic = (
  key: keyof INTERNAL_TOPIC
): INTERNAL_TOPIC[keyof INTERNAL_TOPIC] => {
  if (!key) throw new Error("请输入你要使用的主题名称");
  if (key in topic) {
    // 变更 variable.css 中的样式
    const root = document.documentElement;
    root.className = key;
    // 变更 antd 样式
    return topic[key];
  }
  throw new Error(`主题 ${key} 尚未定义`);
};
