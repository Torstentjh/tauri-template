import "./index.css";
import Router from "./router";
import { ConfigProvider, theme, ThemeConfig } from 'antd';
import { useGlobalStore } from "./stores";
import { useEffect, useMemo } from "react";
import { StoresEnum, ThemeEnum } from './enums/index';

function App() {
  const { darkMode, setDarkMode } = useGlobalStore();
  const prefers = matchMedia('(prefers-color-scheme: dark)');

  const curTheme: ThemeConfig = useMemo(() => {
    if (darkMode) {
      return {
        token: {
          colorBorder: 'rgba(189, 200, 240, 0.157)',
          colorBgTextHover: 'rgba(124, 77, 255, 0.082)',
          colorTextHover: 'rgba(124, 77, 255, 0.082)',
          controlItemBgActive: 'rgba(33, 150, 243, 0.16)',
          colorBgElevated: 'rgb(33, 41, 70)'
        },
        algorithm: theme.darkAlgorithm,
      }
    } else {
      return {
        token: {},
        algorithm: theme.defaultAlgorithm
      }
    }
  }, [darkMode]);

  /** 跟随系统主题模式切换主题 */
  const followOS = () => {
    const newTheme = prefers.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    document.documentElement.dataset.theme = newTheme;
    setDarkMode(newTheme === 'dark' ? true : false);
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem(StoresEnum.SETTING);
    if (!storedTheme) {
      followOS();
    }
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    window.addEventListener('storage', function we(e) {
      const val = JSON.parse(e.newValue!).state.darkMode;
      document.documentElement.dataset.theme = val ? 'dark' : 'light';
    });
  }, [darkMode]);
  return (
    <ConfigProvider theme={curTheme}>
      <Router />
    </ConfigProvider>
  );
}

export default App;
