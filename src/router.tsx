import Home from "./pages/home";
import Result from "./pages/result";
import Title from "./components/TitleBar";
import { PrivateRoute } from "./helpers/handleRoutes";

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
      <PrivateRoute>
        <Title onTitle="Result">
          <Result />
        </Title>
      </PrivateRoute>
    ),
  },
]);

export default router;
