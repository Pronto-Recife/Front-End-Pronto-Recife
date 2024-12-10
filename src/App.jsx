import GlobalStyles from "../src/styles/GlobalStyles";

import { RouterProvider } from "react-router-dom";

import { paginas } from "./routes/index.routes";

export default function App() {
  return (
    <>
      <GlobalStyles /> 
      <RouterProvider router={paginas} />{" "}

    </>
  );
}