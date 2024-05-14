import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/entry`
      );
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/entry/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  const [apiCounts, setApiCounts] = useState({ addCount: 0, updateCount: 0 });

  useEffect(() => {
    fetchApiCounts();
  }, []);

  const fetchApiCounts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/entry/count`
      );
      setApiCounts(response.data);
    } catch (error) {
      console.error("Error fetching API counts:", error);
    }
  };

  return (
    <EntryContext.Provider
      value={{ entries, fetchData, handleDelete, apiCounts, fetchApiCounts }}
    >
      {children}
    </EntryContext.Provider>
  );
};

export { EntryContext, EntryProvider };
