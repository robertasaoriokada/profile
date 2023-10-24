import { format, formatDistanceToNow } from "date-fns";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    "Olá, prazer, meu nome é Roberta Okada, venha conversar comigo sobre tecnologia e inoção!",
  ]);
  const [newCommentText, setNewCommentText] = useState("");
  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = () => {
    event.preventDefault();
    //imutabilidade
    const newCommentText = event.target.comment.value;
    setComments([...comments, newCommentText]);
    setNewCommentText("");
    console.log(comments);
  };

  const handleNewCommentChange = () => {
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete) => {
    //imutabilidade --> as variáveis não sofrem mutação
    //permite que sejamos mais perfomáticos
    //uma variável nunca é alterada na memória da aplicação, nós crimos um novo espaço na memória para um novo valor
    //o set não atualiaza, a gente cria um novo valor para tal variável
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
    console.log(`Deletar comentároio ${commentToDelete}`);
  };

  const editComment = (oldComment, commentToEdit) => {
    console.log("edit comment" + oldComment);
    console.log(commentToEdit);
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== oldComment;
    });
    setComments([...commentsWithoutDeletedOne, commentToEdit]);
    console.log(comments);

    console.log("Editado");
  };
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
        ></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
              onEditComment={editComment}
            />
          );
        })}
      </div>
    </article>
  );
}

export default Post;
