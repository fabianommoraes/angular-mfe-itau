import type { Meta, StoryObj } from '@storybook/angular';
import { SkeletonComponent } from './skeleton.component';

const meta: Meta<SkeletonComponent> = {
  title: 'DesignSystem/SkeletonComponent',
  component: SkeletonComponent,
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
  },
  render: (args) => ({
    props: args,
  }),
};

export default meta;
type Story = StoryObj<SkeletonComponent>;

export const Component: Story = {
  args: {
    width: '300px',
    height: '100px',
    borderRadius: '4px',
  },
};
