import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <RecoilRoot>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </RecoilRoot>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
} else {
  console.error("Root container not found");
}
