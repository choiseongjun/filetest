import logo from "./logo.svg";
import "./App.css";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import { MessageSearch } from "@sendbird/uikit-react";

const APP_ID = "CAE7CC50-CFFC-4F6A-96AD-23F60BA85762";
const USER_ID = "ordercheck";
function App() {
  return (
    <div className="App">
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <input type="file" accept="image/*" />
      </div> */}
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}

export default App;
