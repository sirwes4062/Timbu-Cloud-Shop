import "./App.css";
import { AppProvider } from "./components/AppProvider";
import Hero from "./components/Hero";

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
