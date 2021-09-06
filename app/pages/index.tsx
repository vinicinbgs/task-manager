import type { NextPage } from 'next'

import Header from '../components/Header';
import Card from '../components/Card';

import IProject from '../data/IProject';

import { getProjects } from './api/projects';

type Props = {
  projects: IProject[];
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <div className="flex-center">
      <Header title={"Projects List"} />

      <main className="container">
        {projects.map((project) => {
          let formatDateToBr = new Date(project.created_at).toLocaleDateString('pt-BR');
          return <Card key={project.id} id={ project.id } name={project.name} date={formatDateToBr} tasks={ project.tasks }/>
        })}
        <Card id={ 0 }/>
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
