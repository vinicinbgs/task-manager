import React, { useRef, useState } from "react";

import { Toastr, notify } from "../Toast";

import {
  Container,
  Title,
  Name,
  CreatedAt,
  CloseButton,
  CloseIcon,
  Line,
  NewTask,
  CalendarIcon,
  Input,
  TasksStatus,
  RightAlign
} from "./styles";

import ITask from "../../data/ITask";
import Tasks from "./task";

type Props = {
  id: number;
  name?: string;
  date?: string;
  tasks?: ITask[];
  callback?: Function;
};

const Cards: React.FC<Props> = ({
  id,
  name,
  date,
  tasks,
  callback,
}: Props): JSX.Element => {
  const newProjectRef: any = useRef(null);
  const newTaskRef: any = useRef(null);

  const [listOfTasks, setTasks] = useState(tasks ?? []);

  const [lateTasks, setLateTasks] = useState(
    tasks?.filter((curr: ITask) => {
      let expire = new Date(curr.expire_at).getTime();
      let now = new Date().getTime();

      if (expire <= now && !curr.done_at) {
        return curr;
      }
    }) ?? []
  );

  const [checkedTasks, setCheckedTasks] = useState<any>(
    tasks?.filter((curr: ITask) => (curr.done_at ? curr : null)) ?? []
  );

  const handleCreateNewProject = async (e: any) => {
    if (e.key !== "Enter") {
      return;
    }

    const { value }: any = newProjectRef.current;

    if (!value) {
      newProjectRef.current.classList.add("form-error");
      notify("You need to inform the project name");
      return;
    }

    const project: any = await fetch("/api/projects", {
      method: "post",
      body: JSON.stringify({
        name: value,
      }),
    });

    const obj = await project.json();

    if (obj.title == "error") {
      obj.errors.map((error: any) => {
        return notify(error.error);
      });

      return;
    }

    notify("Project inserted with success", "success");

    callback && callback({ project: { ...obj.data, tasks: [] } });
  };

  const handleDeleteProject = async (e: any) => {
    e.preventDefault();

    const { id } = e.target.dataset;

    await fetch("/api/projects/", {
      method: "delete",
      body: JSON.stringify({
        id,
      }),
    });

    notify("Project Deleted with success");

    callback &&
      callback({
        project: {
          id,
          action: "delete",
        },
      });
  };

  const handleCreateNewTask = (e: any) => {
    if (e.key !== "Enter") {
      return null;
    }

    const { value }: any = newTaskRef.current;

    const [task, owner, date] = value.split(/@|#/);

    fetch("/api/tasks", {
      method: "post",
      body: JSON.stringify({
        project_id: id,
        name: task?.trim(),
        owner: owner?.trim(),
        expire_at: date?.trim() ?? new Date().toISOString().split("T")[0],
      }),
    }).then(async (task) => {
      const obj = await task.json();

      if (obj.title == "error") {
        obj.errors.map((error: any) => {
          return notify(error.error);
        });
      } else {
        setTasks([...listOfTasks, obj.data]);

        newTaskRef.current.value = ""; // clear input field

        if (
          obj &&
          new Date(obj.data.expire_at) <= new Date() &&
          !obj.data.done_at
        ) {
          let lates = [...lateTasks, ...[obj.data]];
          obj && setLateTasks(lates);
        }
      }
    });
  };

  const callbackCheckedTask = (isChecked: boolean, id: Number) => {
    const task = listOfTasks?.filter((task) => task.id == id);

    if (isChecked) {
      task && setCheckedTasks([...checkedTasks, ...task]);
      task && setLateTasks(lateTasks.filter((task) => task.id != id));
    } else {
      setCheckedTasks(
        checkedTasks.filter((task: { id: Number }) => task.id != id)
      );

      if (task && new Date(task[0].expire_at) <= new Date()) {
        console.log(task);
        setLateTasks([...lateTasks, ...task]);
      }
    }
  };

  if (id === 0) {
    return (
      <div key={id} className="container">
        <Container>
          <Input
            key={id}
            name="name"
            ref={newProjectRef}
            title="Project name"
            placeholder="Write here the project name"
            onKeyPress={handleCreateNewProject}
          />
        </Container>
      </div>
    );
  }

  return (
    <div key={id} className="container">
      <Toastr />
      <Container>
        <RightAlign>
        <CloseButton data-id={id} onClick={handleDeleteProject} title="Delete Project">
            <CloseIcon />
          </CloseButton>
          </RightAlign>
        <Title>
          <Name title="Project name">{name}</Name>
          <CreatedAt title="Created at">
            <CalendarIcon />
            Creation Date - 
            <strong style={{ fontWeight: 700 }}>{date}</strong>
          </CreatedAt>
          <TasksStatus>
            {checkedTasks.length} done / {lateTasks.length} late /{" "}
            {listOfTasks.length} total
          </TasksStatus>
        </Title>

        {listOfTasks &&
          listOfTasks.map((task) => (
            <Tasks key={task.id} task={task} callback={callbackCheckedTask} />
          ))}

        {listOfTasks && <Line />}

        <label>Input: task description @owner #due date (yyyy-mm-dd)</label>
        <NewTask
          data-type="new-task"
          ref={newTaskRef}
          type="text"
          onKeyPress={handleCreateNewTask}
        />
      </Container>
    </div>
  );
};

export default Cards;
