import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/ui/input';

const meta: Meta<typeof Input> = {
  title: 'Neura UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const PromptInput: Story = {
  args: {
    placeholder: 'Describe what you want to create...',
    className: 'border-purple-200 focus:border-purple-400',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Processing...',
    disabled: true,
  },
};
