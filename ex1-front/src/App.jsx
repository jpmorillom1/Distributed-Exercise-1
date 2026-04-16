import "./App.css";
import SearchCharacterSection from "./components/SearchCharacterSection";
import HistorySection from "./components/HistorySection";

function App() {
  return (
    <main className="app-container">
      <header>
        <h1>Character Explorer</h1>
        <p>
          Search for characters by their ID and view the history of your
          requests. Use the form below to get started!
        </p>
      </header>
      <SearchCharacterSection />
      <HistorySection />
    </main>
  );
}

export default App;
