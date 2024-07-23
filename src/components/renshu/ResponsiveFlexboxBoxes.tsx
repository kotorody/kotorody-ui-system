import React from "react";
import { Box } from "@chakra-ui/react";

interface ResponsiveGridBoxesProps {
  width?: string | object;
  height?: string | object;
}

export const ResponsiveGridBoxes: React.FC<ResponsiveGridBoxesProps> = ({
  width = "90dvw",
  height = "90dvh",
  ...props
}) => {
  return (
    <Box
      bg="pink"
      width={width}
      height={height}
      p="4px"
      display="grid"
      // デバイスのサイズに合わせて何列かを指定
      gridTemplateColumns={{
        // スマホ
        base: "repeat(2, 160px)",
        // タブレット
        md: "repeat(3, 160px)",
        // PC
        lg: "repeat(6, 160px)",
      }}
      // デバイスのサイズに合わせて何行かを指定
      gridTemplateRows={{
        // スマホ
        base: "repeat(3, 100px)",
        // タブレット
        md: "repeat(2, 100px)",
        // PC
        lg: "100px",
      }}
      gap="4px"
      justifyContent="center"
      alignContent="center"
      {...props}
    >
      <Box bg="aqua" width="160px" height="100px" />
      <Box bg="aqua" width="160px" height="100px" />
      <Box bg="aqua" width="160px" height="100px" />
      <Box bg="aqua" width="160px" height="100px" />
      <Box bg="aqua" width="160px" height="100px" />
      <Box bg="aqua" width="160px" height="100px" />
    </Box>
  );
};
