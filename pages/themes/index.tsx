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
            <ThemesHero.Root>
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build faster</ThemesHero.Title>
                <ThemesHero.Text>
                  Configurable component library from the Radix team. Move quickly with a suite of
                  beautiful, high-quality components and smooth DX.
                </ThemesHero.Text>
                <ThemesHero.Button />
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <ThemeConfig grayScale="mauve" mode="light">
                  <Provider>
                    <ExampleDashboard />
                  </Provider>
                </ThemeConfig>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>
        <MagicCurtain.Item>
          <div className="dark-theme" style={{ background: 'none' }}>
            <ThemesHeader />
            <ThemesHero.Root>
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build better</ThemesHero.Title>
                <ThemesHero.Text>
                  Configurable component library from the Radix team. Move quickly with a suite of
                  beautiful, high-quality components and smooth DX.
                </ThemesHero.Text>
                <ThemesHero.Button />
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <ThemeConfig grayScale="mauve" mode="dark">
                  <Provider>
                    <ExampleDashboard />
                  </Provider>
                </ThemeConfig>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>
        <MagicCurtain.Item>
          <div className="light-theme" style={{ background: 'none' }}>
            <ThemesHeader />
            <ThemesHero.Root>
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build more</ThemesHero.Title>
                <ThemesHero.Text>
                  Configurable component library from the Radix team. Move quickly with a suite of
                  beautiful, high-quality components and smooth DX.
                </ThemesHero.Text>
                <ThemesHero.Button />
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <ThemeConfig accentScale="gray" grayScale="sand" textColor="auto" mode="light">
                  <Provider>
                    <ExampleEcommerce />
                  </Provider>
                </ThemeConfig>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>
        <MagicCurtain.Item>
          <div className="dark-theme" style={{ background: 'none' }}>
            <ThemesHeader />
            <ThemesHero.Root>
              <ThemesHero.Tagline>
                <ThemesHero.Title>Build cooler</ThemesHero.Title>
                <ThemesHero.Text>
                  Configurable component library from the Radix team. Move quickly with a suite of
                  beautiful, high-quality components and smooth DX.
                </ThemesHero.Text>
                <ThemesHero.Button />
              </ThemesHero.Tagline>
              <ThemesHero.Showcase>
                <ThemeConfig accentScale="gray" grayScale="sand" textColor="auto" mode="dark">
                  <Provider>
                    <ExampleEcommerce />
                  </Provider>
                </ThemeConfig>
              </ThemesHero.Showcase>
            </ThemesHero.Root>
          </div>
        </MagicCurtain.Item>
      </MagicCurtain.Root>
    </>
  );
}
