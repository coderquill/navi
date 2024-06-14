export {};

import React, { ReactNode } from 'react';
import styled from 'styled-components';

const HoverEffectContainer = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

interface HoverEffectProps {
  children: ReactNode;
}

const HoverEffect: React.FC<HoverEffectProps> = ({ children }) => (
  <HoverEffectContainer>{children}</HoverEffectContainer>
);

export default HoverEffect;
