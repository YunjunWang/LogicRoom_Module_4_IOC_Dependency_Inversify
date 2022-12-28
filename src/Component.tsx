import "reflect-metadata";
import React from "react";
import { render } from "react-dom";
import Presenter from "./Presenter";
import { container, createContainer } from "./Dependencies/IOC";

function App() {
  // 2. entry point
  const viewModel = container.get(Presenter).load();
  return <>{viewModel.message}</>;
}

// 1. composition route
createContainer("real");
const rootElement = document.getElementById("root");
render(<App />, rootElement);
