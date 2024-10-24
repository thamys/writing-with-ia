import { theme, ThemeConfig } from "antd";

export const seedTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    // Seed Token
    colorPrimary: "#00b96b",
    borderRadius: 2,

    // Alias Token
    colorBgContainer: "#f6ffed",
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
};

export const lightTheme: ThemeConfig = {};

export const getThemeConfig: (type?: "light" | "dark") => ThemeConfig = (
  type = "light"
) => {
  if (type === "dark") {
    return { ...seedTheme, ...darkTheme };
  }
  return { ...seedTheme, ...lightTheme };
};
