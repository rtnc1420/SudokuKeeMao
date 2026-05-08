import { useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import StatsScreen from "./components/StatsScreen";

type Screen = "start" | "game" | "stats";
type Difficulty = "easy" | "normal" | "hard";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("start");
  const [playerName, setPlayerName] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  return (
    <div className="bg-[#eeeeec] size-full flex items-center justify-center p-8 overflow-auto">
      {currentScreen === "start" && (
        <StartScreen
          playerName={playerName}
          setPlayerName={setPlayerName}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          onStartGame={() => setCurrentScreen("game")}
        />
      )}
      {currentScreen === "game" && (
        <GameScreen
          difficulty={difficulty}
          playerName={playerName}
          onViewStats={() => setCurrentScreen("stats")}
          onBack={() => setCurrentScreen("start")}
        />
      )}
      {currentScreen === "stats" && (
        <StatsScreen
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          onBackToGame={() => setCurrentScreen("game")}
          onBackToStart={() => setCurrentScreen("start")}
        />
      )}
    </div>
  );
}
