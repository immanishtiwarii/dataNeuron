import React, { useContext, useState } from "react";
import { ResizableBox } from "react-resizable";
import { EntryContext } from "../context/EntryContext";
import axios from "axios";

const ComponentOne = () => {
  const [editedEntries, setEditedEntries] = useState({});
  const [updatedIds, setUpdatedIds] = useState(new Set());

  const { fetchData, entries, handleDelete, fetchApiCounts } =
    useContext(EntryContext);

  const handleEdit = (id, name, age, hobby) => {
    setEditedEntries({ ...editedEntries, [id]: { name, age, hobby } });
  };

  const handleChange = (id, field, value) => {
    setEditedEntries({
      ...editedEntries,
      [id]: { ...editedEntries[id], [field]: value },
    });
  };

  const handleUpdate = async (id) => {
    try {
      const { name, age, hobby } = editedEntries[id];
      await axios.put(`${process.env.REACT_APP_BASE_URL}/api/entry/update`, {
        id,
        name,
        age,
        hobby,
      });
      alert("Updated");
      window.location.reload();
      fetchData();
    } catch (error) {
      console.error("Error updating entry:", error);
      // Handle error
    }
  };
  return (
    <>
      <ResizableBox
        width={350}
        height={520}
        minConstraints={[100, 100]}
        className="resizable-box"
      >
        <div className="box-content">Component 1</div>
        <div>
          <ul className="entry-list">
            {entries.map((entry) => (
              <li key={entry._id}>
                {editedEntries[entry._id] ? (
                  <div>
                    <input
                      type="text"
                      value={editedEntries[entry._id].name}
                      onChange={(e) =>
                        handleChange(entry._id, "name", e.target.value)
                      }
                    />
                    <input
                      type="number"
                      value={editedEntries[entry._id].age}
                      onChange={(e) =>
                        handleChange(entry._id, "age", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      value={editedEntries[entry._id].hobby}
                      onChange={(e) =>
                        handleChange(entry._id, "hobby", e.target.value)
                      }
                    />
                    <button onClick={() => handleUpdate(entry._id)}>
                      Update
                    </button>
                  </div>
                ) : (
                  <div>
                    <p>Name:{entry.name}</p> <p>Age:{entry.age}</p>
                    <p>Hobby:{entry.hobby}</p>
                    <button onClick={() => handleDelete(entry._id)}>
                      Delete
                    </button>
                    <button
                      style={{ background: "blue" }}
                      onClick={() =>
                        handleEdit(
                          entry._id,
                          entry.name,
                          entry.age,
                          entry.hobby
                        )
                      }
                    >
                      Edit
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </ResizableBox>
    </>
  );
};

export default ComponentOne;
