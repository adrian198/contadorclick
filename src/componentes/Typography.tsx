import React from 'react'
import { Box, styled, SxProps, Theme } from '@mui/system'
import { BoxProps } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


 export interface TypographyProps {

    color?: 'textPrimary' | 'textSecondary' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
    weight?: 'regular' | 'medium' | 'semiBold' | 'bold'
    align?: 'left' | 'center' | 'right'
    colorIntensity?: 'light' | 'main' | 'dark'
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'caption'
    sx?: SxProps<Theme> 
}
const TypographyComponent: React.FC<TypographyProps> = (props) => {
    const { color, weight, align, colorIntensity, size, sx, children } = props;
  
     
    return (
      <Typography
        color={color}
        weight={weight}
        align={align}
        colorIntensity={colorIntensity}
        variant={size}
        sx={sx}
      >
        {children}
      </Typography>
    );
  };
  
  export default TypographyComponent;
