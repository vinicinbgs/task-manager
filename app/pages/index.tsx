import type { NextPage } from 'next'

import Header from '../components/Header';
import Card from '../components/Card';

import IProject from '../data/IProject';

import { getProjects } from './api/projects';
import { useEffect, useState } from 'react';

type Props = {
  projects: IProject[];
}

const Home: NextPage<Props> = ({ projects }) => {
  const [projectList, setProjectList] = useState(projects);
  const [newProject, setNewProject] = useState<any>(null);

  useEffect(() => {
    if(newProject) {
      if(newProject?.action == "delete") {
        const p = projectList.filter((project) => {
          return newProject.id != project.id
        })
        setProjectList(p);
        return;
      }
      
      setProjectList([...projectList, newProject])
    }

  }, [newProject])

  const projectsCallback = ({project}: any) => {
      setNewProject(project);
  }

  return (
    <div className="flex-center">
      <Header title={"Projects List"} />
      
      <main className="container">
        <Card id={ 0 } callback={projectsCallback}/>
        {projectList.map((project: any) => {
          let formatDateToBr = new Date(project.created_at).toLocaleDateString('pt-BR');
          return <Card 
                key={project.id} 
                id={ project.id } 
                name={project.name} 
                date={formatDateToBr} 
                tasks={ project.tasks }
                callback={projectsCallback}
              />
        })}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const projects = await getProjects();

  return {
    props: {
      projects: projects
    }
  }
}

export default Home
