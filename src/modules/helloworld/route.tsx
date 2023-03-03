import React from "react";
const Example = lazy(() => import("./views"));

export default [
  {
    path: "/helloworld",
    element: <Example />,
    children: [],
  },
];
