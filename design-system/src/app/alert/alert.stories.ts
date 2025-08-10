import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'DesignSystem/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
  render: (args) => ({
    props: args,
  }),
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Component: Story = {
  args: {
    message: 'This is an alert message!',
  },
};
