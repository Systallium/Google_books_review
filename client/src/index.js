// importing react react-dom and our app component along with the service worker that comes with react when you create react app
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// telling react to load the virtual dom with our app 
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
