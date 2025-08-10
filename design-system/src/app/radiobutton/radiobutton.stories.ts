import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radiobutton.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'DesignSystem/RadioButtonComponent',
  component: RadioButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
  render: (args) => ({
    props: args,
  }),
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Component: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    label: 'Choose an option',
    name: 'exampleOptions',
  },
};
