module.exports = {
  description: "创建一个模块",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "模块名称",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/modules/{{lowerCase name}}/views/index.tsx",
      templateFile: "plop-templates/module/views/index.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase name}}/.d.ts",
      templateFile: "plop-templates/module/.d.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase name}}/route.tsx",
      templateFile: "plop-templates/module/route.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase name}}/service.ts",
      templateFile: "plop-templates/module/service.hbs",
    },
    {
      type: "add",
      path: "src/modules/{{lowerCase name}}/store.ts",
      templateFile: "plop-templates/module/store.hbs",
    },
  ],
};
