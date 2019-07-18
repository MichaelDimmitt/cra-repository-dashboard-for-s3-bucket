import React from "react";
import ReactDOM from "react-dom";
import PinnedScrollbar from "./components/PinnedScrollbar.js";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(PinnedScrollbar),
    document.getElementById("mount")
  );
});
