import {
  Footer,
  Header,
  Hero,
  HeroGallery,
  Main,
  Sidebar,
} from '../../components/ui';
import styles from './AppLayout.module.css';

export function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero>
        <Sidebar />
        <HeroGallery />
      </Hero>
      <Main />
      <Footer />
    </div>
  );
}
