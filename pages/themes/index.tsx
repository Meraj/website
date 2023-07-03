import { Box, Provider, ThemeConfig } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';
import Head from 'next/head';
import { ThemesHeader } from '@components/ThemesHeader';
import { ThemesHero } from '@components/themes/ThemesHero';
import { ExampleDashboard } from '@components/themes/ExampleDashboard';
import { MagicCurtain } from '@components/themes/MagicCurtain';
import { ExampleEcommerce } from '@components/themes/ExampleEcommerce';

export default function ThemesHome() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#FDFCFD" />
      </Head>

      <MagicCurtain.Root>
        <MagicCurtain.Item>
          <div className="light-theme" style={{ background: 'none' }}>
            <ThemesHeader />
            <ThemesHero title="Build faster">
              <ThemeConfig grayScale="mauve" mode="light">
                <Provider>
                  <ExampleDashboard />
                </Provider>
              </ThemeConfig>
            </ThemesHero>
          </div>
        </MagicCurtain.Item>
        <MagicCurtain.Item>
          <div className="dark-theme" style={{ background: 'none' }}>
            <ThemesHeader />
            <ThemesHero title="Build better">
              <ThemeConfig grayScale="mauve" mode="dark">
                <Provider>
                  <ExampleDashboard />
                </Provider>
              </ThemeConfig>
            </ThemesHero>
          </div>
        </MagicCurtain.Item>
        <MagicCurtain.Item>
          <div className="light-theme" style={{ background: 'none' }}>
            <ThemesHeader />
            <ThemesHero title="Build faster">
              <ThemeConfig accentScale="gray" grayScale="sand" textColor="auto" mode="light">
                <Provider>
                  <ExampleEcommerce />
                </Provider>
              </ThemeConfig>
            </ThemesHero>
          </div>
        </MagicCurtain.Item>
        <MagicCurtain.Item>
          <div className="dark-theme" style={{ background: 'none' }}>
            <ThemesHeader />
            <ThemesHero title="Build better">
              <ThemeConfig accentScale="gray" grayScale="sand" textColor="auto" mode="dark">
                <Provider>
                  <ExampleEcommerce />
                </Provider>
              </ThemeConfig>
            </ThemesHero>
          </div>
        </MagicCurtain.Item>
      </MagicCurtain.Root>
    </>
  );
}
