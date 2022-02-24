import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Htag } from '../../components'

const Users: NextPage = () => {
  const router = useRouter();

  const btnClickHandler = () => {
    router.push('/')
  }

  const btnBack = () => {
    router.back()
  }

  return (
    <>
      <Htag tag='h1'>User {router.query.id}</Htag>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, aut, hic facilis
        earum tempore blanditiis magnam voluptatibus ipsum nam, temporibus vitae.
        Nemo facilis laudantium animi suscipit consequuntur facere, laborum cupiditate.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, aut, hic facilis
        earum tempore blanditiis magnam voluptatibus ipsum nam, temporibus vitae.
        Nemo facilis laudantium animi suscipit consequuntur facere, laborum cupiditate.
      </p>

      <button onClick={btnClickHandler}>Go to Home page</button>
      <button onClick={btnBack}>Back</button>
    </>
  )
}

export default Users
