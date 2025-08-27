


function CelsiusInput({ value, onTemperatureChange }) {
  return (
    <div className="input-group">
      <label>Celsius (°C):</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder="Enter °C"
      />
    </div>
  );
}

export default CelsiusInput;
