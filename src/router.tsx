import Home from "./pages/home";
import Result from "./pages/result";
import Error from "./pages/error";
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
        <Title onTitle="Hasil">
          <Result />
        </Title>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: (
      <Title onTitle="Error">
        <Error />
      </Title>
    ),
  },
]);

export default router;
