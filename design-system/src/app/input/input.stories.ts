import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'DesignSystem/InputComponent',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    errorMessage: {
      control: 'text',
    },
  },
  render: (args) => ({
    props: args,
  }),
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Component: Story = {
  args: {
    placeholder: 'Enter text here',
    label: 'Input Label',
    type: 'text',
    errorMessage: 'This field is required',
    disabled: false,
    invalid: false,
  },
};
