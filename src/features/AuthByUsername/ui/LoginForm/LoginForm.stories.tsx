import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { username: 'admin', password: '123' } })],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: 'admin', password: '123' } })],
};
