import styles from './HeroGallery.module.css';

export const HeroGallery = () => {
  return (
    <div className={styles.heroGallery}>
      <img
        src="../public/Frame 560.jpg"
        className={styles.heroGalleryImage}
        alt="hiphone image"
      />
    </div>
  );
};
