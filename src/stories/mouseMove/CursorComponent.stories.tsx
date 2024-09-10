import type { Meta, StoryObj } from '@storybook/react';
import CursorComponent from '../../components/CursorComponent';

const meta = {
  title: 'Event/MouseMove',
  component: CursorComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[100dvw] h-[100dvh]'>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CursorComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
