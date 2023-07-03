import * as React from 'react';
import styles from './ThemesHero.module.css';

const ThemesHeroRoot = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={styles.ThemesHeroRoot} {...props}>
    <div className={styles.ThemesHeroContent}>{children}</div>
  </div>
);

const ThemesHeroTagline = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={styles.ThemesHeroTagline}>
    <div className={styles.ThemesHeroTaglineInner}>{children}</div>
  </div>
);

const ThemesHeroTitle = (props: React.ComponentPropsWithoutRef<'h1'>) => (
  <h1 className={styles.ThemesHeroTaglineTitle} {...props} />
);

const ThemesHeroText = (props: React.ComponentPropsWithoutRef<'p'>) => (
  <p className={styles.ThemesHeroTaglineText} {...props} />
);

const ThemesHeroButton = ({ children: _, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
  <a href="/docs/themes" className={styles.ThemesHeroTaglineButton}>
    Get started <span className={styles.ThemesHeroTaglineButtonArrow} />
  </a>
);

const ThemesHeroShowcase = ({ children, title }: React.ComponentPropsWithoutRef<'div'>) => {
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
    <div className={styles.ThemesHeroShowcase} aria-hidden>
      <div className={styles.ThemesHeroShowcaseInner} ref={heroShowcaseScrollRef}>
        {/* An extra div is needed to have padding working as expected within the scroll container */}
        <div>
          <div className={styles.ThemesHeroShowcaseInnerScaled}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const ThemesHero = {
  Root: ThemesHeroRoot,
  Tagline: ThemesHeroTagline,
  Title: ThemesHeroTitle,
  Text: ThemesHeroText,
  Button: ThemesHeroButton,
  Showcase: ThemesHeroShowcase,
};
