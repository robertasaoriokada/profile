import styles from "./Avatar.module.css";
function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="Sua foto de perfil"
    ></img>
  );
}

export default Avatar;
