import React from "react";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import WeightExercise from "./components/WeightExercise";
import "./App.css";

function App() {
  const [exerciseType, setExerciseType] = React.useState("");

  const [isMainMenu, setIsMainMenu] = React.useState(true);

  const onClickExerciseType = (type) => {
    setExerciseType(type);
    setIsMainMenu(false);
  };

  const returnMainMenu = () => {
    setIsMainMenu(true);
    setExerciseType("");
  };

  return (
    <div className="App">
      {isMainMenu && <h1>Go Do Something!</h1>}
      {isMainMenu && <p>Select an exercise:</p>}

      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        {exerciseType !== "running" && isMainMenu && (
          <button onClick={() => onClickExerciseType("running")}>
            Running
          </button>
        )}
        <br />
        {exerciseType !== "bicycling" && isMainMenu && (
          <button onClick={() => onClickExerciseType("bicycling")}>
            Bicycling
          </button>
        )}
        <br />
        {exerciseType !== "pushUps" && isMainMenu && (
          <button onClick={() => onClickExerciseType("pushUps")}>
            Push Ups
          </button>
        )}
        <br />
        {exerciseType !== "jumpingJacks" && isMainMenu && (
          <button onClick={() => onClickExerciseType("jumpingJacks")}>
            Jumping Jacks
          </button>
        )}
        <br />
        {exerciseType !== "sitUps" && isMainMenu && (
          <button onClick={() => onClickExerciseType("sitUps")}>Sit Ups</button>
        )}
        <br />
        {exerciseType !== "benchPress" && isMainMenu && (
          <button onClick={() => onClickExerciseType("benchPress")}>
            Bench Press
          </button>
        )}
      </div>

      {exerciseType === "running" && (
        <div>
          <DurationExercise name={"Running"}></DurationExercise>
          <button onClick={() => returnMainMenu()}>Return</button>
        </div>
      )}
      {exerciseType === "bicycling" && (
        <div>
          <DurationExercise name={"Bicycling"}></DurationExercise>
          <button onClick={() => returnMainMenu()}>Return</button>
        </div>
      )}
      {exerciseType === "pushUps" && (
        <div>
          <RepetitionExercise name={"Push Ups"}></RepetitionExercise>
          <button onClick={() => returnMainMenu()}>Return</button>
        </div>
      )}
      {exerciseType === "jumpingJacks" && (
        <div>
          <RepetitionExercise name={"Jumping Jacks"}></RepetitionExercise>
          <button onClick={() => returnMainMenu()}>Return</button>
        </div>
      )}
      {exerciseType === "sitUps" && (
        <div>
          <RepetitionExercise name={"Sit Ups"}></RepetitionExercise>
          <button onClick={() => returnMainMenu()}>Return</button>
        </div>
      )}
      {exerciseType === "benchPress" && (
        <div>
          <WeightExercise name={"Bench Press"}></WeightExercise>
          <button onClick={() => returnMainMenu()}>Return</button>
        </div>
      )}
    </div>
  );
}

export default App;
