'use client'
import styles from '../page.module.css'
import React, {useState, useEffect } from 'react'

interface FetchedData {
  "name": string,
  "company": string,
  "email": string,
  "phone": string,
  "id": number,
}  

export default function Fetch() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:3001/getUsers')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const dataFetch = (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item:FetchedData) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>I'm The Fetch Page</p>
      </div>
        {dataFetch}
    </main>
  )
}
