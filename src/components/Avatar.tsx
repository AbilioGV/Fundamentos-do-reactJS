import { ImgHTMLAttributes } from "react"; // Importa uma interface com todos as propriedades que uma imagem pode receber
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> { // extende a interface com as propriedades importadas, tirando o src e alt do código
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { // ...props para pegar todas os propriedades da interface ImgHTMLAttributes 
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props} // SpreadOperator para pegar cada valor do ...props, passando como propriedade para a tag img
    />
  );
}