import React, { useContext } from "react";
import { ResizableBox } from "react-resizable";
import AddEntry from "./AddEntry";
import { EntryContext } from "../context/EntryContext";

const ComponentsTwo = () => {
  const { fetchData, entries, handleDelete, fetchApiCounts } =
    useContext(EntryContext);
  return (
    <>
      <ResizableBox
        width={800}
        height={500}
        minConstraints={[100, 100]}
        className="resizable-box"
      >
        <div className="box-content">Component 2</div>
        <AddEntry fetchData={fetchData} fetchApiCounts={fetchApiCounts} />
      </ResizableBox>
    </>
  );
};

export default ComponentsTwo;
