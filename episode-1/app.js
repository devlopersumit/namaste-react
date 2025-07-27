const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i am in h1 tag"),
    React.createElement("h2", {}, "i am in h2 tag"),
    React.createElement("p", { id: "para" }, "My name is Sumit Jha"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am in h1 tag"),
    React.createElement("h2", {}, "i am in h2 tag"),
    React.createElement("p", { id: "para" }, "My name is Sumit Jha"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
