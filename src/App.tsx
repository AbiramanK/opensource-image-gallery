import React from "react";

import "src/fonts/Galada/Galada-Regular.ttf";
import "src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import "./App.css";

import { BaseLayout, ThemeMode } from "src/layouts";
import { Jumbotron } from "./components";

function App() {
  return (
    <React.Fragment>
      <ThemeMode>
        <BaseLayout>
          <Jumbotron />
        </BaseLayout>
      </ThemeMode>
    </React.Fragment>
  );
}

export default App;
