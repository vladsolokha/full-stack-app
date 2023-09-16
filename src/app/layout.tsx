import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import styles from './page.module.css'

import Icon from './assets/FSicon.png'
import HomeIcon from './assets/home-icon.png'
import SaveIcon from './assets/save-icon.png'
import FetchIcon from './assets/fetch-icon.png'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Stack App',
  description: 'front-end React, api node.js, database postgres',
}


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <div className={styles.description}>
            <Image
              src={Icon}
              alt="FS icon"
              className={styles.fslogo}
              height={62}
            >
            </Image>
            <Link href="/" className={styles.card}>
              <Image
                src={HomeIcon}
                alt="home icon"
                height={62}
              >
              </Image> 
              Home
            </Link>
            <Link href="/save" className={styles.card}>
            <Image
                src={SaveIcon}
                alt="save icon"
                height={62}
              >
              </Image> 
              Save
            </Link>
            <Link href="/fetch" className={styles.card}>
            <Image
                src={FetchIcon}
                alt="fetch icon"
                height={62}
              >
              </Image> 
              Fetch
            </Link>  
            
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
