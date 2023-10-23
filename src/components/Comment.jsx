import { useState } from "react";
import Avatar from "./Avatar";
import styles from "./Comment.module.css";
import * as Icon from "@phosphor-icons/react";

function Comment({ content, onDeleteComment, onEditComment }) {
  const [pressEditButton, setPressEditButton] = useState(false);
  const showEditCommentCamp = () => {
    console.log(pressEditButton);
    setPressEditButton(true);
  };
  const handleDeleteComment = () => {
    onDeleteComment(content);
  };
  const handleEditComment = () => {
    onEditComment(content);
  };
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
              <button
                onClick={showEditCommentCamp}
                title="Editar"
                className={styles.editar}
              >
                <Icon.Pencil size={20} />
              </button>
              <button
                onClick={handleDeleteComment}
                title="Excluir"
                className={styles.excluir}
              >
                <Icon.Trash size={20} />
              </button>
            </div>
          </header>
          <div>
            {pressEditButton ? (
              <form className={styles.editForm}>
                <textarea name="editComment" className={styles.editCamp}>
                  {content}
                </textarea>
                <button
                  type="submit"
                  className={styles.buttonToSendEditedComment}
                  onClick={handleEditComment}
                >
                  Editar
                </button>
              </form>
            ) : (
              <p>{content}</p>
            )}
          </div>
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
