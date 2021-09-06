export default interface ITask {
  id: number;
  project_id: number;
  name: string;
  owner: string;
  done_at: string;
  expire_at: string;
  created_at: string;
  updated_at: string;
}