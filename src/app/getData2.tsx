'use client'
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'

interface DownloadData {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}  

const DataFetcher = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading Table...</div>
  }

  const dataTable = (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Company Name</th>
          <th>Company Catch Phrase</th>
          <th>Company BS</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item:DownloadData) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.company.name}</td>
            <td>{item.company.catchPhrase}</td>
            <td>{item.company.bs}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
  
  return (
    <div className={styles.description}>
      <h4>
        {dataTable}
      </h4>
    </div>
  )
}

export default DataFetcher;
 