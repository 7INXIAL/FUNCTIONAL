module.exports = {
  description: "创建一个公共组件",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "组件名称",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/{{lowerCase name}}/index.tsx",
      templateFile: "plop-templates/component/index.hbs",
    },
  ],
};
