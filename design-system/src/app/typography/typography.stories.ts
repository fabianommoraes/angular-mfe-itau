import type { Meta, StoryObj } from '@storybook/angular';
import { TypographyComponent } from './typography.component';

type TypographyComponentArgs = TypographyComponent & { content: string };

const meta: Meta<TypographyComponentArgs> = {
  title: 'DesignSystem/TypographyComponent',
  component: TypographyComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'error'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'bold'],
    },
    tag: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    text: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<TypographyComponentArgs>;

export const Component: Story = {
  args: {
    text: 'Typography Component',
    size: 'md',
    tag: 'span',
    weight: 'normal',
    color: 'default',
  },
};
