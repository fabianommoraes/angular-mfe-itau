import type { Meta, StoryObj } from '@storybook/angular';
import { BackdropComponent } from './backdrop.component';

const meta: Meta<BackdropComponent> = {
  title: 'DesignSystem/BackdropComponent',
  component: BackdropComponent,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
  render: (args) => ({
    props: args,
  }),
};

export default meta;
type Story = StoryObj<BackdropComponent>;

export const Component: Story = {
  args: {},
};
