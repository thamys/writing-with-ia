import { GlobalToken, theme } from "antd";

type useThemeTokensProps = () => GlobalToken;

const useThemeTokens: useThemeTokensProps = () => {
  const { useToken } = theme;
  const { token: themeTokens } = useToken();
  return themeTokens;
};

export default useThemeTokens;
