import type { GetStaticProps, NextPage } from 'next'
import { Htag } from '../components'
import { UserResult } from '../interfaces/users.interface';

const MyPage = ({users}: PageProps) => {

  const printUsers = () => {
    return (
      <ul>
        {
          users.map(u => (
            <li key={u.url}>
              <strong>Name:</strong> {u.name}
            </li>
          ))
        }
      </ul>
    )
  }

  return (
    <>
      <Htag tag='h1'>Test Page</Htag>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, aut, hic facilis
        earum tempore blanditiis magnam voluptatibus ipsum nam, temporibus vitae.
        Nemo facilis laudantium animi suscipit consequuntur facere, laborum cupiditate.
      </p>

      { printUsers() }
    </>
  )
}

export default MyPage;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  
  const res = await fetch('https://swapi.dev/api/people');
  const { results } = await res.json();

  return {
    props: {
      users: []
    },
  }
};


interface PageProps {
  users: UserResult[]
}