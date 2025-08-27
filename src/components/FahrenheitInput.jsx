


function FahrenheitInput({ value, onTemperatureChange }) {
  return (
    <div className="input-group">
      <label>Fahrenheit (°F):</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder="Enter °F"
      />
    </div>
  );
}

export default FahrenheitInput;
