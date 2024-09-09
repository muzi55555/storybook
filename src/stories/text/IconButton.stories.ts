import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from '../../components/IconButton';

const meta = {
  title: 'Text/IConButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconPath: { control: 'text', description: '아이콘의 경로' },
    alt: { control: 'text', description: '아이콘의 대체 텍스트' },
    width: { control: 'number', description: '아이콘의 너비' },
    height: { control: 'number', description: '아이콘의 높이' },
    onClick: { action: 'clicked', description: '아이콘 클릭 시 호출할 함수' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath:
      'https://image.similarpng.com/very-thumbnail/2020/11/Red-incorrect-icon-button-on-transparent-background-PNG-1.png',
    alt: '아이콘',
    width: 24,
    height: 24,
    onClick: fn(),
  },
};
