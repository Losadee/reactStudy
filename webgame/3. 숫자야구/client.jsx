import React from "react";
import ReactDom from "react-dom/client";

import NumberBaseball from "./NumberBaseball";
// import NumberBaseball from "./NumberBaseballClass";
import Test from "./RenderTest";

// const root = ReactDom.createRoot(document.querySelector("#root"));
// root.render(<NumberBaseball />);
ReactDom.createRoot(document.querySelector("#root")).render(<NumberBaseball />);
