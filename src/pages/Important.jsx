import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteTask, selectPrioritizedTasks } from "../redux/Task/taskSlice.js";
import TaskCard from "../components/TaskCard.jsx";
import UpdateTask from "../components/UpdateTask.jsx";
import InputTask from "../components/InputTask.jsx";

function Important() {
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState({});

  const tasks = useSelector(selectPrioritizedTasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleOpenEditModal = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleCloseEditModal = () => {
    setTaskToUpdate({});
    setShowModal(false);
  };

  return (
    <div className="p-8 pt-20 overflow-auto  h-screen w-full ">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-xl font-semibold">Important Tasks</h1>
        <InputTask />
      </div>
      {tasks.length === 0 ? (
        <div className="flex items-center text-2xl font-bold animate-pulse justify-center w-full ">
          No Tasks
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-3">
          {tasks?.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              handleOpenEditModal={handleOpenEditModal}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      )}

      {showModal && (
        <UpdateTask
          taskToUpdate={taskToUpdate}
          handleCloseEditModal={handleCloseEditModal}
        />
      )}
    </div>
  );
}

export default Important;