import React from 'react';
import type { Preview } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    staticDirs: ['../public'],
  },
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
};

console.log('Storybook environment:', process.env.NODE_ENV);
console.log('STORYBOOK_BASE_PATH:', process.env.STORYBOOK_BASE_PATH);

export default preview;