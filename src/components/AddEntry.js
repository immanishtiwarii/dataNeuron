import React, { useState } from "react";
import axios from "axios";

const AddEntry = ({ fetchData, fetchApiCounts }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [error, setError] = useState("");

  const handleAdd = async () => {
    try {
      if (name && age && hobby) {
        await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/entry/add`,
          {
            name,
            age,
            hobby,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert("seccesfuuly");
        setName("");
        setAge("");
        setHobby("");
        fetchData();
        fetchApiCounts(); // Uncomment this line if you want to fetch data after adding entry
      } else {
        alert("Name, age, and hobby are required");
      }
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={hobby}
        placeholder="Hobby"
        onChange={(e) => setHobby(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddEntry;
