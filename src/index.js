import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

import { Provider, Client, defaultExchanges } from "urql";

const client = new Client({
  url: "http://localhost:4000",
  exchanges: defaultExchanges
});

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("root")
);
