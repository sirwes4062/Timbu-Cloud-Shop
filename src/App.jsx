import "./App.css";
import { AppProvider } from "./components/AppProvider";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="Container">
      <AppProvider>
        <Hero />
      </AppProvider>
    </div>
  );
}

export default App;
