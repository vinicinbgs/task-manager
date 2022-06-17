import api from '../_api';

import IProjects from '../../../data/IProject';

export default async (req: any, res: any) => { 
  const { id, name } = JSON.parse(req.body);
  
  let response;

  switch (req.method) {
    case 'POST':
      try {
        response = await api.post(`/projects`, {
          name,
        });

        return res.status(200).json({
          data: response.data
        });
      } catch (e: any) {
        return res.status(e.response.data.status).json(e.response.data)
      }

    case 'DELETE':
      try {
         response = await api.delete(`/projects/${id}`);
  
         return res.status(201).json();
      } catch (e: any) {
        console.log(e)
         return res.status(e.response.data.status).json(e.response.data)
      }
  }
}

const getProjects = async (): Promise<IProjects[]> => {
  const response = await api.get('/projects');
      
  return response.data;
}

export { getProjects }
