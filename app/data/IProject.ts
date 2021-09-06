import ITask from "./ITask";

export default interface IProjects {
  id: number;
  name: string;
  tasks: ITask[];
  created_at: string;
}