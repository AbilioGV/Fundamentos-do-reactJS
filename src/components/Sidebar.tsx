import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      
      <img className={styles.cover} src="https://i.pinimg.com/564x/41/cf/fe/41cffe8bc85d7dc9bdd988916922071e.jpg" />

      <div className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/AbilioGV.png"/>
        <strong>Abilio Gonçalves</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}