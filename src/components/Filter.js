import React from "react";
import { useSelector } from "react-redux";

const DoneTasks = () => {
  const tasks = useSelector((state) => state.todos);
  return (
    <div
      className="DoneTasks"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div className="UnDone">
        <button className="activtodos">
          {" "}
          Active Todos({tasks.filter((el) => !el.isCompleted).length})
        </button>
        <div>
          {tasks
            .filter((el) => !el.isCompleted)
            .map((el) => (
              <li>{el.text}</li>
            ))}
        </div>
      </div>
      <div className="Done">
        <button className="completedtodos">
          {" "}
          Completed Todos({tasks.filter((el) => el.isCompleted).length})
        </button>
        <div>
          {tasks
            .filter((el) => el.isCompleted)
            .map((el) => (
              <li>{el.text}</li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DoneTasks;
