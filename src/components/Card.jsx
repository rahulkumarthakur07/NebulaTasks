import React, { useState } from "react";
import { MdCheckCircle, MdDelete, MdRadioButtonUnchecked } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ color, task, completed, reference, tasksdata, settasksdata, taskId }) => {
  const [iscompleted, setCompleted] = useState(completed);
  const [isDeleted, setIsDeleted] = useState(false);

  const toggleComplete = () => {
    setCompleted(!iscompleted);
    settasksdata(tasksdata.map(t => 
      t.id === taskId ? { ...t, completed: !iscompleted } : t
    ));
  };

  const handleDelete = () => {
    setIsDeleted(true);
    setTimeout(() => {
      settasksdata(tasksdata.filter(t => t.id !== taskId));
    }, 300); // match animation duration
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragMomentum={true}
      dragElastic={0.8}
      whileTap={{ scale: 0.95, cursor: "grabbing" }}
      initial={{ opacity: 1, scale: 1 }}
      animate={isDeleted ? { opacity: 0, scale: 0.5, rotate: 20 } : { opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.3 }}
      className="min-w-48 max-w-48 h-56 rounded-2xl bg-zinc-900 overflow-hidden relative shadow-lg"
    >
      {/* Content */}
      <div className="h-full w-full p-4 flex flex-col">
        <div className="font-semibold flex justify-between text-sm text-zinc-400 text-center">
          <span>Task</span>
          <span className="cursor-pointer" onClick={handleDelete}>
            <MdDelete color="#FFF" size={18} />
          </span>
        </div>
        <div className={`text-zinc-300 ${iscompleted ? "line-through" : ""} mt-2 text-sm leading-snug`}>
          {task}
        </div>
      </div>

      {/* Footer with checkbox */}
      <div
        style={{ backgroundColor: color }}
        className="absolute bottom-0 left-0 w-full h-10 flex items-center justify-between px-3"
      >
        <span className="text-white text-sm font-medium">Completed</span>
        {iscompleted ? (
          <MdCheckCircle
            onClick={toggleComplete}
            size={18}
            color="#fff"
          />
        ) : (
          <MdRadioButtonUnchecked
            onClick={toggleComplete}
            size={18}
            color="#fff"
          />
        )}
      </div>
    </motion.div>
  );
};

export default Card;
