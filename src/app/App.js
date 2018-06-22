import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import PageContainer from "../containers/Container";
import "./App.css";

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <h1>Football Player Finder</h1>
      <div className="App__container">
        <PageContainer />
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
