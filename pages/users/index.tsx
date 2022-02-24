import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Htag } from '../../components'
import { UserResult } from '../../interfaces/users.interface'

const Users: NextPage = () => {

  const [users, setUsers] = useState<UserResult[]>([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch('https://swapi.dev/api/people');
      const { results } = await res.json();

      setUsers(results)
    }

    loadData();
  }, [])

  const printUsers = () => {
    if (!users.length) return <Htag tag='h2'>Loading...</Htag>

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
      <Htag tag='h1'>Users list</Htag>
      
      { printUsers() }

      
      <ul>
        <li>
          <Link href={`/users/1`}>
            <a>User 1</a>
          </Link>
        </li>
        <li>
          <Link href={`/users/2`}>
            <a>User 2</a>
          </Link>
        </li>
        <li>
          <Link href={`/users/3`}>
            <a>User 3</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Users
