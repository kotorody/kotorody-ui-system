import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

interface SideLogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  // 必要に応じて追加のプロパティを定義
}

export const SideLogo: React.FC<SideLogoProps> = (props) => {
  return (
    <Image
      src="/images/side-logo-aid-on.png"  // publicディレクトリからの相対パスを指定
      alt="Logo"
      w="137px"
      h="44px"
      {...props}
    />
  );
};