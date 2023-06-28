import * as React from 'react';
import styles from './ThemesHero.module.css';

export const ThemesHero = ({ children }: React.PropsWithChildren<{}>) => {
  const heroShowcaseScrollRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let currentWidth = 0;

    const centerDemoScroll = () => {
      const newWidth = window.innerWidth;
      const container = heroShowcaseScrollRef.current;

      if (getComputedStyle(container).overflowX !== 'scroll') {
        container.scrollLeft = 0;
        currentWidth = 0;
        return;
      }

      if (newWidth !== currentWidth && container) {
        container.scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
        currentWidth = newWidth;
      }
    };

    centerDemoScroll();
    addEventListener('resize', centerDemoScroll);

    return () => {
      removeEventListener('resize', centerDemoScroll);
    };
  }, []);

  return (
    <div className={styles.ThemesHeroRoot}>
      <div className={styles.ThemesHeroContent}>
        <div className={styles.ThemesHeroTagline}>
          <div className={styles.ThemesHeroTaglineInner}>
            <h1 className={styles.ThemesHeroTaglineTitle}>Build faster</h1>

            <p className={styles.ThemesHeroTaglineText}>
              Configurable component library from the Radix team. Move quickly with a suite of
              beautiful, high-quality components and smooth DX.
            </p>
            <a href="/docs/themes" className={styles.ThemesHeroTaglineButton}>
              Get started <span className={styles.ThemesHeroTaglineButtonArrow} />
            </a>
          </div>
        </div>

        <div className={styles.ThemesHeroShowcase} aria-hidden>
          <div className={styles.ThemesHeroShowcaseInner} ref={heroShowcaseScrollRef}>
            {/* An extra div is needed to have padding working as expected within the scroll container */}
            <div>
              <div className={styles.ThemesHeroShowcaseInnerScaled}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
