import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { motion } from "framer-motion";

const AddTaskCard = ({tasksdata, settask, reference }) => {
  const [taskText, setTaskText] = useState("");
  const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#f59e0b", "#0ea5e9"];




  useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksdata));
      }, [tasksdata]);

  const handleAddTask = () => {
    if (taskText.trim() === "") return;

    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      


    settask(prev => [
      ...prev,
      {
        id: Date.now(),
        task: taskText,
        completed: false,
        color: randomColor,
      },
    ]);

    setTaskText(""); // clear textarea after adding
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragMomentum={true}
      dragElastic={0.8}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      className="min-w-48 h-56 rounded-2xl bg-zinc-900 overflow-hidden relative shadow-lg"
    >
      {/* Content */}
      <div className="h-full w-full p-4 flex flex-col">
        <div className="font-semibold flex justify-between text-sm text-zinc-400 text-center">
          <span>Add Task</span>
        </div>
        <div className="text-zinc-300 mt-2 text-sm leading-snug">
          <textarea
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
            placeholder="Enter task..."
            rows={6}
            className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-none bg-zinc-900 text-white"
          />
        </div>
      </div>

      {/* Footer with Add button */}
      <div
        className="absolute bg-blue-700 bottom-0 left-0 w-full h-10 flex items-center justify-between px-3"
      >
        <span className="text-white text-sm font-medium">Add Task</span>
        <span
          onClick={handleAddTask}
          className="text-white cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-blue-600 flex items-center gap-2 bg-blue-700 px-3 rounded-md py-1.5 text-sm font-medium"
        >
          <MdAdd />
        </span>
      </div>
    </motion.div>
  );
};

export default AddTaskCard;
