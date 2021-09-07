import React, { useRef, useState } from 'react';

import Router from "next/router";

import { Toastr, notify } from '../Toast';

import { Container, Name, CreatedAt, Line, Task, NewTask, CalendarIcon, Input, TrashIcon, TrashButton } from './styles';

import ITask from '../../data/ITask';

type Props = {
  id: number;
  name?: string;
  date?: string;
  tasks?: ITask[];
}

const Cards: React.FC<Props> = ({ id, name, date, tasks }: Props): JSX.Element => {
  const newProjectRef: any = useRef(null);
  const newTaskRef: any = useRef(null);
  const [listOfTasks, setTasks] = useState(tasks ?? []);

  const handleCreateNewProject = (e: any) => {
    if (e.key !== 'Enter') {
      return null;
    }
    
    const { value }: any = newProjectRef.current;
    
    if (!value) {
      newProjectRef.current.classList.add('form-error');
      return;
    }
    
    fetch('/api/projects', {
      method: 'post',
      body: JSON.stringify({
        name: value
      })
    }).then(async (project) => {
      const obj = await project.json();

      if (obj.title == 'error') {
        obj.errors.map((error: any) => {
          return notify(error.error);
        });

      } else {
        Router.reload();
      }
    });

    e.preventDefault();
  }

  const handleDeleteProject = (e: any) => {
    e.preventDefault();
    
    const { id } = e.target.dataset;

    fetch('/api/projects', {
      method: 'delete',
      body: JSON.stringify({
        id
      })
    }).then(async () => {
      Router.reload();
    });
  }

  const handleCreateNewTask = (e: any) => {
    if (e.key !== 'Enter') {
      return null;
    }
    
    const { value }: any = newTaskRef.current;

    const [task, owner, date] = value.split(/@|#/);

    fetch('/api/tasks', {
      method: 'post',
      body: JSON.stringify({
        project_id: id,
        name: task,
        owner: owner,
        expire_at: date ?? new Date()
      })
    }).then(async (task) => {
      const obj = await task.json();

      if (obj.title == 'error') {
        obj.errors.map((error: any) => {
          return notify(error.error);
        });

      } else {
        setTasks([...listOfTasks, obj.data])
        newTaskRef.current.value = '';
      }
    });

    e.preventDefault();
  }

  const handleCheckTask = (e: any) => {
    const isChecked = e.target.checked;
    const { id, project_id } = e.target.dataset;
    
    fetch('/api/tasks', {
      method: 'put',
      body: JSON.stringify({
        id,
        project_id,
        done: isChecked,
      })
    }).then(async (task) => {
      const obj = await task.json();

      if (obj.title == 'error') {
        obj.errors.map((error: any) => {
          return notify(error.error);
        });

      }
    });
  }

  const listTasks = (task: ITask) => {
    let expireAt = new Date(task.expire_at).toLocaleDateString('pt-BR');
    let now = new Date().toLocaleDateString('pt-BR');
  
    let isExpired = now > expireAt && !task.done_at;

    return (
      <Task data-type="task" key={task.id} className={ isExpired ? 'expired' : ''}>
        <input
          data-id={task.id}
          data-project_id={task.project_id}
          type="checkbox"
          onChange={handleCheckTask}
          value="true"
          defaultChecked={ task.done_at ? true : false }
        />
        
        <span data-type="name" title="Task Description">{ task.name } </span>
        <span data-type="owner" title="Owner">@{ task.owner } </span>
        <span data-type="expire_at" title="Expire at"> # { expireAt } </span>
      </Task>
    )
  }

  if (id === 0) {
    return (
      <div key={id} className="container">
        <Container>
          <Input
            key={id}
            name="name"
            ref={ newProjectRef }
            title="Project name"
            placeholder="Write here the project name"
            onKeyPress={handleCreateNewProject} />
        </Container>
      </div>
    );
  }

  return (
    <div key={id} className="container">
       <Toastr />
       <Container>
        <Name title="Project name">
          {name}
        <TrashButton data-id={ id } onClick={ handleDeleteProject }>
            <TrashIcon />
        </TrashButton>
        </Name>
        <CreatedAt title="Created at">
          <CalendarIcon />
          {date}
        </CreatedAt>
        
        {listOfTasks && listOfTasks.map((task) => {
          return listTasks(task);
        })}

        {listOfTasks && <Line />}

        <NewTask data-type="new-task" ref={newTaskRef} type="text" placeholder="task description @owner #due date (yyyy-mm-dd)" onKeyPress={ handleCreateNewTask }/>

      </Container>
    </div>
  );
}

export default Cards;