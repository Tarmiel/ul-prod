/* eslint-disable indent */
/* eslint-disable react/display-name */
import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (StoryComponent) =>
    (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
