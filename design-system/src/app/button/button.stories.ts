import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

type CustomButtonComponentArgs = ButtonComponent & { content: string };

const meta: Meta<CustomButtonComponentArgs> = {
  title: 'DesignSystem/ButtonComponent',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'special'],
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<CustomButtonComponentArgs>;

export const Component: Story = {
  args: {
    text: 'Button',
    disabled: false,
    variant: 'primary',
    size: 'large',
  },
};
