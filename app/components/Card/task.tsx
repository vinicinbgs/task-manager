import React, { useState } from "react";

import ITask from "../../data/ITask";

import { notify } from "../Toast";

import { Task } from "./styles";

type Props = {
  task: ITask;
  callback: Function;
};

const Tasks = ({ task, callback }: Props) => {
  const [isExpired, setIsExpired] = useState(checkExpired(task));

  function checkExpired(task: ITask) {
    let expireAt = new Date(task.expire_at);
    let now = new Date();
    let isExpired = now.getTime() >= expireAt.getTime() && !task.done_at;
    return isExpired;
  }

  const handleCheckTask = async (e: any) => {
    const isChecked = e.target.checked;

    const { id, project_id } = e.target.dataset;

    const task = await fetch("/api/tasks", {
      method: "put",
      body: JSON.stringify({
        id,
        project_id,
        done: isChecked,
      }),
    });
    
    const obj = await task.json();

    if (obj.title == "error") {
      obj.errors.map((error: any) => {
        return notify(error.error, 'error');
      });
      return;
    }

    setIsExpired(checkExpired(obj.data));

    notify(`Task ${isChecked ? "completed" : "pending"}`, `${isChecked ? "success" : "warning"}`);

    callback(isChecked, id);
  };

  let expireAt = new Date(task.expire_at);

  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  return (
    <Task data-type="task" key={task.id} className={isExpired ? "expired" : ""}>
      <input
        data-id={task.id}
        data-project_id={task.project_id}
        type="checkbox"
        value="true"
        onClick={handleCheckTask}
        defaultChecked={task.done_at ? true : false}
      />

      <span data-type="name" title="Task Description">
        {task.name}{" "}
      </span>
      <span data-type="owner" title="Owner">
        @{task.owner}{" "}
      </span>
      <span data-type="expire_at" title="Expire at">
        {" "}
        #
        {expireAt.getTime() == tomorrow.getTime()
          ? "tomorrow"
          : expireAt.toLocaleDateString("pt-BR")}
      </span>
    </Task>
  );
};

export default Tasks;
