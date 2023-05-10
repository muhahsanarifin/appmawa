import React from "react";
import ReactDOM from "react-dom/client";
import store, {persistedStore} from "./redux/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router.tsx";
import { createBrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <RouterProvider router={createBrowserRouter(router)} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
