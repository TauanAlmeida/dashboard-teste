import GlobalStyle from "./styles/global";
import { useState } from "react";
import ThemePersistedState from "./utils/ThemePersistedState";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider, createMuiTheme, Button } from "@material-ui/core";
import { deepPurple, purple } from "@material-ui/core/colors";
function App() {
  const [themeMode, setTheme] = ThemePersistedState("theme", "light");

  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: deepPurple,
      secondary: purple,
      backgroundPrimary: themeMode === "light" ? "#FDFDFF" : "#282C31",
      backgroundSecondary: themeMode === "light" ? "#EFF3F9" : "#212427",
      text: {
        primary: themeMode === "light" ? "#4F4F4F" : "#CACACA",
        secondary: "#979797",
      },
    },
    spacing: 8,
  });

  const toggleTheme = () => {
    setTheme(themeMode === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard toggleTheme={toggleTheme} themeMode={themeMode} />
    </ThemeProvider>
  );
}

export default App;
