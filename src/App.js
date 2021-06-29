import React, { Fragment } from "react";
import "./App.css";
import Background from "./components/Background";
import Search from "./components/Search";
import OutputContainer from "./containers/OutputContainer";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Search />

        <Background />
        <OutputContainer />
      </Provider>
    </Fragment>
  );
}

export default App;
