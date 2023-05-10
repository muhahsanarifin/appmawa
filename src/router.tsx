import Home from "./pages/home";
import Result from "./pages/result";
import Title from "./components/TitleBar";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Title onTitle="Home">
        <Home />
      </Title>
    ),
  },
  {
    path: "/hasil/nilai",
    element: (
      <Title onTitle="Result">
        <Result />
      </Title>
    ),
  },
]);

export default router;
