const React = require("react");
const ReactDom = require("react-dom/client");

const WordRelay = require("./WordRelay");

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<WordRelay />);
