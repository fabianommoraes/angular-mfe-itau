import type { Meta, StoryObj } from '@storybook/angular';
import { NotFoundComponent } from './notfound.component';

const meta: Meta<NotFoundComponent> = {
  title: 'DesignSystem/NotFoundComponent',
  component: NotFoundComponent,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => ({
    props: args,
  }),
};

export default meta;
type Story = StoryObj<NotFoundComponent>;

export const Component: Story = {
  args: {},
};
