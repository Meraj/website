import { Box, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';
import { ExampleEcommerce } from '@components/themes/ExampleEcommerce';

export default function ExamplePage() {
  return (
    <Box p="9">
      <Theme accentScale="gray" grayScale="sage" textColor="auto">
        <ExampleEcommerce />
      </Theme>
    </Box>
  );
}
