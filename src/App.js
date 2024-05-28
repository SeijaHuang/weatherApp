import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <main className="flex h-screen w-svw items-center justify-center">
      <BackgroundImage></BackgroundImage>
      <WeatherCard></WeatherCard>
    </main>
  );
}

export default App;
