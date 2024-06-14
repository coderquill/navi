import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const TrainerContainer = styled.div`
  padding: 20px;
`;

const Step = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
`;

const ProceduralTrainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const steps = [
    { id: 1, title: 'Step 1: Preparation', description: 'Description for step 1' },
    { id: 2, title: 'Step 2: Action', description: 'Description for step 2' },
    { id: 3, title: 'Step 3: Review', description: 'Description for step 3' }
    // Add more steps as needed
  ];

  return (
    <TrainerContainer>
      <h2>Procedure {id}</h2>
      {steps.map(step => (
        <Step key={step.id}>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </Step>
      ))}
    </TrainerContainer>
  );
};

export default ProceduralTrainer;
