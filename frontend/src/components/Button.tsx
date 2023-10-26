import { Button as ButtonMui, ButtonProps } from '@mui/material';

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    variant,
    color,
    size,
    disabled,
    startIcon,
    endIcon,
    fullWidth,
    href,
    className,
  } = props;

  const buttonProps: ButtonProps = {
    variant,
    color,
    size,
    disabled,
    startIcon,
    endIcon,
    fullWidth,
    href,
    className,
  };

  return (
    <ButtonMui onClick={onClick} {...buttonProps}>
      {children}
    </ButtonMui>
  );
};

export default Button;
