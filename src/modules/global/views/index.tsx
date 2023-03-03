import React from "react";
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
export default function Global() {
  // TODO 登陆鉴权
  const navigate = useNavigate();
  useEffect(() => {
    const uniquely = sessionStorage.getItem("uniquely");
    if (uniquely) {
      navigate("/helloworld");
    }
  }, []);
  // TODO 路由鉴权
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/helloworld" && location.pathname !== "/") {
      navigate("/");
    }
  });

  // TODO 模拟登陆
  useEffect(() => {
    setTimeout(() => {
      sessionStorage.setItem("uniquely", "7INXIAL");
      navigate("/helloworld");
    }, 1500);
  }, []);

  // TODO 整体布局/单页面布局
  return (
    // TODO 主题
    <ConfigProvider
      theme={{
        token: useTopic("helloworld"),
      }}
    >
      <div className="global-wrap">
        <Outlet />
      </div>
    </ConfigProvider>
  );
}
