import { Comment } from "./Comment";
import { Avatar } from "./Avatar"

import styles from "./Posts.module.scss"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/maykbrito.png" />

          <div className={styles.authorInfo}>
            <strong>Jonas Gerosa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="May 11th" dateTime="20222-05-11 08:13:30">Posted 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Lfoaijfoafasoi afssa</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias maxime voluptates quis veniam vitae  unde enim laborum, velit, eligendi dolore nesciunt? Nemo quo labore veniam voluptates ipsa!</p>
        <p><a href="#">Lorem ipsum dolor sit amet</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback:</strong>

        <textarea
          placeholder="Leave a comment"
        />

        <button type="submit">Publish</button>
      </form>

      <div className={styles.commentList}>
        <Comment />

        <Comment />

        <Comment />
      </div>
    </article>
  );
}
