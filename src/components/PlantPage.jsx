import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plantsData) => setPlants(plantsData))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Handle adding a new plant
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((createdPlant) => setPlants([...plants, createdPlant]));
  }

  // Filter plants based on search query
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* Pass the filtered plants down to PlantList */}
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;