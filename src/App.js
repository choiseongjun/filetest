import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <input type="file" accept="image/*" />
      </div>
    </div>
  );
}

export default App;
