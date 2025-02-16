import styles from './Hero.module.css';

type HeroProps = {
  children: React.ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className={styles.hero}>{children}</div>;
};
