import { Outlet } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <nav className="header">
        <Header />
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
