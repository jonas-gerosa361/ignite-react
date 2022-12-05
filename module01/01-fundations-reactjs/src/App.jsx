import { Header } from "./components/Header";
import { Post } from "./components/Post";

import './components/core/global.module.scss'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />

    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post
          author="Jonas"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima quam iusto veniam dolore ex harum voluptas cum dignissimos aut recusandae commodi earum, quia blanditiis et vero accusamus. Vitae, nisi?"
        />

        <Post
          author="Cal"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias exercitationem, commodi quas reprehenderit praesentium eveniet facere quis, quae id inventore quos, consectetur iste a eum magni! Quos assumenda deleniti eius?"
        />
      </main>

    </div>
    </>
  );
}
