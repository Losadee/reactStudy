const React = require("react");
const ReactDom = require("react-dom/client");

const GuGuDan = require("./GuGuDan");

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<GuGuDan />);
