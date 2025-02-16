import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarListItem}>
          <a href="*">Womans' fashion</a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="*">Mens' fashion</a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="*">Electornic</a>
        </li>
        <li className={styles.sidebarListItem}>
          <a href="*">Jewelery</a>
        </li>
      </ul>
    </div>
  );
}
