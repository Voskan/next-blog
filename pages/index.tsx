import type { NextPage } from 'next'
import Link from 'next/link'
import { Htag } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Htag tag='h1'>Lorem ipsum dolor...</Htag>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      
      <Link href={`/users`}>
        <a>Users page</a>
      </Link>
    </>
  )
}

export default Home
