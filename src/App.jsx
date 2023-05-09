
import { Header } from "./components/Header";
import { Post } from "./components/post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/RudsonSoares.png',
      name: 'Rudson Soares',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu profile', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-01 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Diogo.png',
      name: 'Diogo',
      role: 'Educador'
    },
    content: [
      { type: 'paragraph', content: 'Boa Noite 👋', },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu profile', },
      { type: 'link', content: 'jane.design/aula01' },
    ],
    publishedAt: new Date('2023-05-02 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

