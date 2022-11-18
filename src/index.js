import React from "react";
// import ReactDOM from "react-dom";
import { createRoot, hydrateRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import "./app.media.css";
import "antd/dist/antd.css"
import { Provider } from "react-redux";
import store from "./_redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
// import {watchNetworkConnection} from "./configs/config";
// watchNetworkConnection()

//with useSelector, useDispatch hooks, we dont need to use connect HOC to get states from props
//actions - action creator pure functions - what to do
//reducers - reducer pure function - how to do
//store - global single source of truth, global data sharing, singleton object

//contexts for state & prop management are pub-sub/context-consumer pattern
//prop drilling - uni directional, top to bottom, parent to child way of data passing
// store.subscribe(() => {
//     console.log('state object via subscribe', store.getState())
// })

//getting vars from env file
const isSSR = process.env.REACT_APP_IS_SSR !== "false";
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0Client = process.env.REACT_APP_AUTH0_ClIENT;

//change background image setinterval
const changeBg = () => {
  let bodyBg = document.getElementById("bggif");
  let imgNum = Math.floor(Math.random() * 9);
  try {
    bodyBg.style.backgroundImage = `url("/assets/bg${imgNum}.gif")`;
  } catch (err) {}
};

const IndexApp = (
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0Client}
      redirectUri={window.location.origin}
    >
      <div className="main-container">
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    </Auth0Provider>
  </React.StrictMode>
);

const container = document.getElementById("root");
const root = isSSR ? hydrateRoot(container) : createRoot(container);
// const renderMethod = isSSR ? ReactDOM.hydrate : ReactDOM.render
// renderMethod(IndexApp, root)
root.render(IndexApp);

setInterval(changeBg, 7000);
