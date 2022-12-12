import React from 'react';
import { classed } from '@tw-classed/react';
import clsx from 'clsx';
import { cls } from '@/helpers/css';

const ButtonBase = classed('button', clsx('cursor-pointer px-2 rounded-full'), {
  variants: {
    type: {
      primary: cls`bg-blue-400`,
      secondary: cls`bg-green-400`,
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

export interface IButtonProps extends React.ComponentProps<typeof ButtonBase> {}

const Button: React.FC<IButtonProps> = (props) => {
  return <ButtonBase {...props} />;
};

export default Button;
