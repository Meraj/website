import { Box, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';

import { ExampleDashboard } from '@components/themes/ExampleDashboard';

export default function ExamplePage() {
  return (
    <Box p="9">
      <Theme grayScale="mauve">
        <ExampleDashboard />
      </Theme>
    </Box>
  );
}
