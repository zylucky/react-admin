import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider } from "antd";
// import useTheme from "@/hooks/useTheme";
// import { useSelector } from "react-redux";
// import { theme } from "antd";

function App() {
  // const { themeConfig } = useSelector((state) => state.global);
  // 全局使用主题
	// useTheme(themeConfig);

  return (
    <HashRouter>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
