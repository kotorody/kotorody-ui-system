import React from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"

interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  hoverBgColor?: string;
  activeBgColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "white",
  bgColor = "#FD2A44",
  hoverBgColor = "#FD2A44DE",
  activeBgColor = "#FD2A44AB",
  ...props
}) => {
  return (
    <ChakraButton
      color={color}
      bgColor={bgColor}
      _hover={{ bgColor: hoverBgColor }}
      _active={{ bgColor: activeBgColor }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};