
import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";
import "./TemperatureConverter.css";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(value, convertFn) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) return "";
  return convertFn(input).toFixed(2);
}

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");        // input value
  const [scale, setScale] = useState("c");                 // which input was last used

  const handleCelsiusChange = (value) => {
    setScale("c");
    setTemperature(value);
  };

  const handleFahrenheitChange = (value) => {
    setScale("f");
    setTemperature(value);
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  let message = "Enter a value above!";
  if (temperature !== "") {
    if (scale === "c") {
      message = `You converted ${temperature}°C into ${fahrenheit}°F`;
    } else if (scale === "f") {
      message = `You converted ${temperature}°F into ${celsius}°C`;
    }
  }

  return (
    <div className="converter-container">
      <h1>Temperature Converter</h1>
      <CelsiusInput value={celsius} onTemperatureChange={handleCelsiusChange} />
      <FahrenheitInput
        value={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <p>{message}</p>
    </div>
  );
}

export default TemperatureConverter;
