import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

interface SideLogoProps extends Omit<ImageProps, 'src' | 'alt'> {
  basePath?: string;
}

export const SideLogo: React.FC<SideLogoProps> = ({ basePath = '', ...props }) => {
  const logoPath = process.env.NODE_ENV === 'production' 
    ? `${basePath}/images/side-logo-aid-on.png`
    : '/images/side-logo-aid-on.png';

  console.log('Logo path:', logoPath); // デバッグ用

  return (
    <Image
      src={logoPath}
      alt="Aid-On Side Logo"
      w="137px"
      h="44px"
      onError={(e) => {
        console.error('Failed to load logo', e);
      }}
      {...props}
    />
  );
};