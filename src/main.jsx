import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <Provider store={store}>
        <PersistGate loading={<>Loading...</>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ShopContextProvider>
  </BrowserRouter>
);
