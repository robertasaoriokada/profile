import Avatar from "./Avatar";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="tech"
      ></img>
      <div className={styles.profile}>
        <Avatar
          hasBorder={true}
          src="https://github.com/robertasaoriokada.png"
        />
        <strong>Roberta Saori Okada Cusinato</strong>
        <span>Desenvolvedora web</span>
      </div>
      <footer>
        <a href="#">Editar o perfil</a>
      </footer>
    </aside>
  );
}

export default Sidebar;
