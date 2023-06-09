import { FC, lazy } from 'react';
import { IAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<IAddCommentFormProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    })
);
