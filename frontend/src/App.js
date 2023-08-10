import "./App.css";
import Login from "./components/Login";
import AppRoutes from "./AppRoutes";

// import ProjectInfo from "./components/ProjectInfo";

function App() {
  return (
    <div className="App">
      {/* <ProjectInfo/> */}
      <h1>App</h1>
      <AppRoutes />

      <Login />
    </div>
  );
}

export default App;
// =====================================
