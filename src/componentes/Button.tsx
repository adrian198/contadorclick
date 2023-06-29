
import React from 'react'
import { Box, styled, SxProps, Theme } from '@mui/system'
import { BoxProps } from "@mui/material";

export interface ButtonProps {
  onClick: () => void
  title: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  solid?: boolean
  disabled?: boolean
  sx?: SxProps<Theme>
}

const sizeMap = {
  small: 10,
  medium: 15,
  large: 20
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'size' && prop !== 'disabled'
})<BoxProps & ButtonProps>(({ theme, color, variant, size, disabled }) => ({
  backgroundColor: variant === 'contained' ? theme.palette[color].main : 'transparent',
  borderColor: variant === 'outlined' ? theme.palette[color].main : 'transparent',
  borderWidth: variant === 'outlined' ? '1px' : '0',
  padding: `${sizeMap[size]}px`,
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? 'none' : 'all',
  borderRadius: '8px',
  color: variant === 'contained' ? theme.palette[color].contrastText : theme.palette[color].main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}))

const Button: React.FC<ButtonProps> = ({
                                         onClick,
                                         title,
                                         icon,
                                         iconPosition = 'left',
                                         color = 'primary',
                                         variant = 'contained',
                                         size = 'medium',
                                         solid = true,
                                         disabled = false,
                                         sx
                                       }) => {
  return (
    <StyledBox onClick={onClick} color={color} variant={variant} size={size} disabled={disabled} sx={sx}>
      {icon && iconPosition === 'left' && icon}
      {title}
      {icon && iconPosition === 'right' && icon}
    </StyledBox>
  )
}

export default Button