import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import AddTaskCard from "./AddTaskCard";

const Foreground = () => {
  const cardContainer = useRef(null);

  // Initialize state from localStorage only, fallback to empty array
  const [tasksdata, settasksdata] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save tasks to localStorage whenever tasksdata changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksdata));
  }, [tasksdata]);

  return (
    <div
      ref={cardContainer}
      className="z-6 p-4 absolute overflow-hidden top-0 left-0 w-full h-screen"
    >
      <div className="flex p-4 gap-4 flex-wrap w-full h-screen">
        {/* Add Task Card */}
        <AddTaskCard settask={settasksdata} reference={cardContainer} />

        {/* Existing Tasks */}
        {tasksdata.map((task) => (
          <Card
          tasksdata={tasksdata}
          settasksdata={settasksdata}
            key={task.id}
            task={task.task}
            color={task.color}
            completed={task.completed}
            reference={cardContainer}
            setTasks={settasksdata} // to toggle completed state or delete
            taskId={task.id} // needed for updating tasks
          />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
