import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import AitoLandingPage from '../src/components/templates/renshu';

const meta = {
  title: 'Templates/AitoLandingPage',
  component: AitoLandingPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    headerBackgroundColor: { control: 'color' },
    logoWidth: { control: 'text' },
    logoHeight: { control: 'text' },
    navFontSize: { control: 'text' },
    navFontWeight: { control: 'text' },
    buttonPrimaryColor: { control: 'color' },
    buttonSecondaryColor: { control: 'color' },
    buttonFontSize: { control: 'text' },
  },
  args: {
    onNavItemClick: fn(),
    onButtonClick: fn(),
  },
} satisfies Meta<typeof AitoLandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomHeader: Story = {
  args: {
    headerBackgroundColor: '#f0f0f0',
    logoWidth: '180px',
    logoHeight: '50px',
    navFontSize: '16px',
    navFontWeight: 'bold',
    buttonPrimaryColor: '#4A90E2',
    buttonSecondaryColor: '#2A609A',
    buttonFontSize: '15px',
  },
};

export const MobileView: Story = {
  args: {
    logoWidth: '120px',
    logoHeight: '35px',
    navFontSize: '14px',
    buttonFontSize: '13px',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  args: {
    logoWidth: '150px',
    logoHeight: '42px',
    navFontSize: '15px',
    buttonFontSize: '14px',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};