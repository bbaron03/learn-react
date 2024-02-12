// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Profile_Mistake from './qcomps/profile_mistake'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <Profile_Mistake />
        <RecipeList />
    </div>
  )
}
