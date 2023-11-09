import { Button as ButtonMui, ButtonProps } from '@mui/material';

export const Button = (props: ButtonProps) => {
  const { children, onClick, ...otherProps } = props;

  return (
    <ButtonMui onClick={onClick} {...otherProps}>
      {children}
    </ButtonMui>
  );
};

export default Button;
