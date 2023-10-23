import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Nome</strong>
            <span>Cargo principal</span>
          </div>
        </div>

        <time title="11 de Maio" dateTime="">
          Publicado há{" "}
        </time>
      </header>

      <div className={styles.content}>
        <p>Você precisa estender as roupas que estãoi na máquina</p>
        <p>Você precisa fazer a leitura do Sri Ram</p>
        <p>Você já treinou o piano e ihuuuu</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

export default Post;
