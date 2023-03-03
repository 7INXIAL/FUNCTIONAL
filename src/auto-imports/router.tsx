import React from "react";
import { createHashRouter, RouteObject } from "react-router-dom";

const Global = lazy(() => import("../modules/global/views"));
const routes: RouteObject[] = [];

interface Files {
  (url: string): {
    default: RouteObject[];
  };
  keys: {
    (): Array<string>;
  };
}

// 动态引入
const files: Files = require.context("../modules", true, /route\.tsx$/);
files.keys().forEach((url) => {
  const deft: RouteObject[] = files(url).default;
  deft.forEach((_) => {
    routes.push(_);
  });
});

export default createHashRouter([
  {
    path: "/",
    element: <Global />,
    children: routes,
  },
]);
