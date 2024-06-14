// src/components/ProceduralTrainer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TrainerContainer = styled.div`
  margin-left: 220px;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProceduralTrainer: React.FC = () => (
  <TrainerContainer>
    <h2>Procedural Trainer</h2>
    <div>
      <Section>
        <Link to="/procedure/1">
          <img src="/path/to/emergency-procedures.png" alt="Emergency Procedures" />
          <p>Emergency Procedures</p>
          <span>50%</span>
        </Link>
      </Section>
      <Section>
        <Link to="/procedure/2">
          <img src="/path/to/pre-flight-procedures.png" alt="Pre-Flight Procedures" />
          <p>Pre-Flight Procedures</p>
          <span>0%</span>
        </Link>
      </Section>
      <Section>
        <Link to="/procedure/3">
          <img src="/path/to/cfi.png" alt="CFI" />
          <p>CFI</p>
          <span>0%</span>
        </Link>
      </Section>
    </div>
  </TrainerContainer>
);

export default ProceduralTrainer;
