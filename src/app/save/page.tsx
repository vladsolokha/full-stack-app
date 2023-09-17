'use client'
import styles from '../page.module.css'
import React from 'react'
import DataFetcher from '../getData2'
import DataRaw from '../getData'


export default function Save() {
  const handleSave = async () => {
    try {
      const data = await DataRaw()
  
      const response = await fetch('http://localhost:3001/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data}),
      });
  
      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }
  
  return (
  <main className={styles.main}>
    <div className={styles.description}>
      <p>This page uses getData2 component to fetch memoized version of data</p>
    </div>
    <span className={styles.card}>
      <button className={styles.button} onClick={handleSave}>Push to save to Database</button>
    </span>  
    <DataFetcher />
  </main>
  )  
}
