import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider } from "antd";

import { useSelector } from "react-redux";
import { theme } from "antd";

function App() {
  const { themeConfig } = useSelector((state) => state.global);
  console.log(themeConfig);

  return (
    <HashRouter>
      <ConfigProvider
        theme={{
        // 1. 单独使用暗色算法
        algorithm: theme.defaultAlgorithm,

        // 2. 组合使用暗色算法与紧凑算法
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}>
        <Router />
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
