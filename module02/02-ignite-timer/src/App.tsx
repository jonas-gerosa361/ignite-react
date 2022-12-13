import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./Button/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button variant="danger"/>
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}
