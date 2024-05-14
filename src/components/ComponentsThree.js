import React, { useState, useEffect, useContext } from "react";
import { ResizableBox } from "react-resizable";
import axios from "axios";
import { EntryContext } from "../context/EntryContext";

const ComponentsThree = () => {
  const { fetchData, entries, handleDelete, apiCounts } =
    useContext(EntryContext);
  return (
    <>
      <ResizableBox
        width={1000}
        height={300}
        minConstraints={[100, 100]}
        className="resizable-box"
      >
        <div className="box-content">Component 3</div>
        <div className="count-container">
          <p>Add Count: {apiCounts.addCount}</p>
          <p>Update Count: {apiCounts.updateCount}</p>
        </div>
      </ResizableBox>
    </>
  );
};

export default ComponentsThree;
