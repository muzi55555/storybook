import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DefaultTextField from '../../components/DefaultTextField';

const meta = {
  title: 'Text/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconPath: { control: 'text', description: '아이콘의 경로' },
    alt: { control: 'text', description: '아이콘의 대체 텍스트' },
    width: { control: 'number', description: '아이콘의 너비' },
    height: { control: 'number', description: '아이콘의 높이' },
    placeholder: { control: 'text', description: '텍스트 필드의 placeholder' },
    value: { control: 'text', description: '텍스트 필드의 값' },
    errorMessage: { control: 'text', description: '에러 메시지' },
    isError: { control: 'boolean', description: '에러 상태' },
  },
  args: {
    onClick: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath:
      'https://image.similarpng.com/very-thumbnail/2020/11/Red-incorrect-icon-button-on-transparent-background-PNG-1.png',
    alt: '아이콘',
    width: 24,
    height: 24,
    placeholder: 'input',
    value: 'value',
    errorMessage: 'error',
    isError: true,
    onClick: fn(),
    onChange: fn(),
  },
};
