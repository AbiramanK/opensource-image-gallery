import React from "react";

import "src/fonts/Galada/Galada-Regular.ttf";
import "src/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import "./App.css";

import { BaseLayout, ThemeMode } from "src/layouts";

function App() {
  return (
    <React.Fragment>
      <ThemeMode>
        <BaseLayout>
          <h1>Main Page</h1>
        </BaseLayout>
      </ThemeMode>
    </React.Fragment>
  );
}

export default App;
