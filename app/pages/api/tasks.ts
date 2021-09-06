import api from './_api';

export default async (req: any, res: any) => { 
  const { id, project_id, done, name, owner, expire_at } = JSON.parse(req.body);

  let response;

  switch (req.method) {
    case 'POST':
      try {
        response = await api.post(`/projects/${project_id}/tasks`, {
          name,
          owner,
          expire_at
        });

        return res.status(200).json({
          data: response.data
        });
      } catch (e: any) {
        return res.status(e.response.data.status).json(e.response.data)
      }
    
    case 'PUT':
      response = await api.put(`/projects/${project_id}/tasks/${id}`, {
        done,
      });

      return res.status(200).json({
        data: response.data
      });
  }
}
