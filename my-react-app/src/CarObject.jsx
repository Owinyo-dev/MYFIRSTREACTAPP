import React, { useState } from "react";

function CarObject() {
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  function handleYearChange(event) {
    setYear(event.target.value);
  }
  function handleMakeChange(event) {
    setMake(event.target.value);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
  }
  function handleAddCar(event) {
    event.preventDefault();
    setCars((prevCars) => [...prevCars, { year, make, model }]);
    setYear("");
    setMake("");
    setModel("");
  }

  return (
    <div>
      <h1>List of Car Objects</h1>
      <ol>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ol>
      <input type="number" value={year} onChange={handleYearChange} />
      <input type="text" value={make} onChange={handleMakeChange} placeholder />
      <input
        type="text"
        value={model}
        onChange={handleModelChange}
        placeholder="Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
export default CarObject;
