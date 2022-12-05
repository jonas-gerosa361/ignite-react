import styles from "./Avatar.module.css"

export function Avatar({src, alt = "", border = true}) {
  return (
    <img
      className={border ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
