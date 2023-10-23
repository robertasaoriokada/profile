import styles from "./Header.module.css";
import igniteLogo from "C:/reactAprendizado/aulasRocket/01-fundamentos-react/assets/ignite.svg";
import * as Icon from "@phosphor-icons/react";
console.log(igniteLogo);
function Header() {
  return (
    <header className={styles.header}>
      <Icon.Monitor size={40} />
      <strong>Bem-vindo</strong>
    </header>
  );
}

export default Header;
