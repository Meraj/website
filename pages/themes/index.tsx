import { Provider, ThemeConfig } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';
import Head from 'next/head';
import { ThemesHeader } from '@components/ThemesHeader';
import { ThemesHero } from '@components/themes/ThemesHero';
import { ExampleDashboard } from '@components/themes/ExampleDashboard';

export default function ThemesHome() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#FDFCFD" />
      </Head>

      <ThemesHeader />
      <ThemesHero>
        <ThemeConfig grayScale="mauve">
          <Provider>
            <ExampleDashboard />
          </Provider>
        </ThemeConfig>
      </ThemesHero>
    </>
  );
}
