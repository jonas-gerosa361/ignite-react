import styles from "./Comment.module.scss"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar border={false} src="https://github.com/jonas-gerosa361.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jonas Gerosa</strong>
              <time title="December, 5th 2022" dateTime="2022-12-05 16:00:00">Around 2h</time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Thats great!</p>

        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Thumbs up <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
