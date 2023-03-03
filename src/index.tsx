import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./variable.css";
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
window.addEventListener("beforeunload", () => {
  localStorage.removeItem("star-clear");
  setTimeout(() => {
    localStorage.setItem("star-clear", `${Math.random()}`);
  }, 5);
  setTimeout(() => {
    localStorage.setItem("star-clear", `${Math.random()}`);
  }, 4);
  setTimeout(() => {
    localStorage.setItem("star-clear", `${Math.random()}`);
  }, 3);
});
window.addEventListener("unload", () => {
  if (!localStorage.getItem("star-clear")) {
    localStorage.clear();
    localStorage.setItem("cleared", `${Math.random()}`);
  }
});
