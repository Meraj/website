import { Box, Provider, ThemeConfig } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';
import { ExampleMusicApp } from '@components/themes/ExampleMusicApp';

export default function ExamplePage() {
  return (
    <Box p="9">
      <ThemeConfig grayScale="slate" accentScale="crimson">
        <Provider>
          <ExampleMusicApp />
        </Provider>
      </ThemeConfig>
    </Box>
  );
}
