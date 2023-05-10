import Home from "./pages/home";
import Result from "./pages/result";
import Title from "./components/TitleBar";

const router = [
  {
    path: "/",
    element: (
      <Title onTitle="Home">
        <Home />
      </Title>
    ),
  },
  {
    path: "result",
    element: (
      <Title onTitle="Result">
        <Result />
      </Title>
    ),
  },
];

export default router;
