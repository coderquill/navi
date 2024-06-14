import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { startProcedure } from '../utils/procedureUtils';

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  height: 100vh;
`;

const StepsContainer = styled.div`
  width: 30%;
  padding-right: 20px;
`;

const Step = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${({ isActive }) => (isActive ? 'black' : 'gray')};
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
`;

const StepCircle = styled.div<{ isActive: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'red' : 'lightgray')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  margin-right: 10px;
`;

const StepDetails = styled.div`
  flex: 1;
`;

const ContentContainer = styled.div`
  width: 70%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CompletionPercentage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StarsContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const StarIcon = styled(FaStar)<{ filled: boolean }>`
  color: ${({ filled }) => (filled ? '#ffd700' : '#dcdcdc')};
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const stepsData = [
  {
    id: 1,
    title: 'Engine Out',
    subtitle: 'In Flight',
    isActive: true,
    percentage: 50,
    stars: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
  },
  {
    id: 2,
    title: 'Engine Fire',
    subtitle: 'In Flight',
    isActive: false,
    percentage: 0,
    stars: 0,
    description: 'Vestibulum auctor dapibus neque...'
  },
  {
    id: 3,
    title: 'Electrical Failure',
    subtitle: '',
    isActive: false,
    percentage: 0,
    stars: 0,
    description: 'Cras eu orci quam...'
  }
];

const ProcedurePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [steps, setSteps] = useState(stepsData);

  useEffect(() => {
   
  }, [id]);

  const handleStart = (stepId: number) => {
    if (steps[0].id === stepId) {
      startProcedure(stepId); 
    }
  };

  return (
    <PageContainer>
      <StepsContainer>
        {steps.map((step) => (
          <Step key={step.id} isActive={step.isActive} onClick={() => step.isActive && handleStart(step.id)}>
            <StepCircle isActive={step.isActive}>{step.id}</StepCircle>
            <StepDetails>
              <div>{step.title}</div>
              <div>{step.subtitle}</div>
            </StepDetails>
          </Step>
        ))}
      </StepsContainer>
      <ContentContainer>
        <CompletionPercentage>
          {steps[0].title} - {steps[0].percentage}% Complete
          <StarsContainer>
            {[...Array(3)].map((_, index) => (
              <StarIcon key={index} filled={index < steps[0].stars} />
            ))}
          </StarsContainer>
        </CompletionPercentage>
        <div>{steps[0].description}</div>
        <StartButton onClick={() => handleStart(steps[0].id)}>Start</StartButton>
      </ContentContainer>
    </PageContainer>
  );
};

export default ProcedurePage;
