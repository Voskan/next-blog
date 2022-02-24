import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Htag } from '../../components'

const Users: NextPage = () => {
  const router = useRouter();
  console.log(router);
  

  return (
    <>
      <Htag tag='h1'>Page {router.query.page}</Htag>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, aut, hic facilis
        earum tempore blanditiis magnam voluptatibus ipsum nam, temporibus vitae.
        Nemo facilis laudantium animi suscipit consequuntur facere, laborum cupiditate.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, aut, hic facilis
        earum tempore blanditiis magnam voluptatibus ipsum nam, temporibus vitae.
        Nemo facilis laudantium animi suscipit consequuntur facere, laborum cupiditate.
      </p>
    </>
  )
}

export default Users
