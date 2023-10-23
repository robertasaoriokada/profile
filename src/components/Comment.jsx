import Avatar from "./Avatar";
import styles from "./Comment.module.css";
import * as Icon from "@phosphor-icons/react";

function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://i.pinimg.com/564x/b4/de/14/b4de142ecd12c0fcfa7e122849036fa4.jpg"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nome</strong>
              <time>Cerca de 1h atrás</time>
            </div>
            <div className={styles.btns}>
              <button title="Editar" className={styles.editar}>
                <Icon.Pencil size={20} />
              </button>
              <button title="excluir" className={styles.excluir}>
                <Icon.Trash size={20} />
              </button>
            </div>
          </header>
          <p>Conteúdo do comentário</p>
        </div>
        <footer>
          <button>
            <Icon.ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Comment;
