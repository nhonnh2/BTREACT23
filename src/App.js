import logo from "./logo.svg";
import "./App.css";
import PickCar from "./pick-car/PickCar";
import PickGlasses from "./pick-glasses/PickGlasses";

function App() {
  return (
    <div className="App">
      {/* <PickGlasses /> */}
      <PickCar />
    </div>
  );
}

export default App;
