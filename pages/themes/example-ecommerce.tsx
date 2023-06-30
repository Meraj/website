import { Box, Provider, ThemeConfig } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';
import { ExampleEcommerce } from '@components/themes/ExampleEcommerce';

export default function ExamplePage() {
  return (
    <Box p="9">
      <ThemeConfig accentScale="gray" grayScale="sand" textColor="auto">
        <Provider>
          <ExampleEcommerce />
        </Provider>
      </ThemeConfig>
    </Box>
  );
}
