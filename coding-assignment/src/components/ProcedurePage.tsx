import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { FaStar, FaLock } from 'react-icons/fa';
import { startProcedure } from '../utils/procedureUtils';

interface ProcedurePageProps {
  procedureId: number;
}

const GlobalStyle = createGlobalStyle`
  body, html {
    background-color: #f2f6ff;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  background-color: #f2f6ff; /* Background color */
`;

const StepsContainer = styled.div`
  width: 40%;
  padding-right: 20px;
  position: relative;
  overflow: visible; /* Ensure overflow is visible */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Step = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  color: ${({ isActive }) => (isActive ? 'black' : 'gray')};
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'not-allowed')};
  position: relative;
  justify-content: center;
  flex-direction: column;
`;

const StepCircleContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  overflow: visible; /* Ensure overflow is visible */
`;

const StepCircle = styled.div<{ isActive: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'red' : 'lightgray')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  position: absolute;
  top: 20px; 
  left: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
`;

const StepDetails = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const StepTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const StepSubtitle = styled.div`
  font-size: 12px;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const StarIcon = styled(FaStar)<{ filled: boolean }>`
  color: ${({ filled }) => (filled ? 'red' : 'gray')};
`;

const ContentContainer = styled.div`
  width: 35%; /* Adjusted width */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  margin: 0 auto; /* Center it horizontally */
`;

const CompletionPercentage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
`;

const PercentageText = styled.span`
  margin-left: 10px; /* Add distance between the stars and percentage */
`;

const Heading = styled.h2`
  font-size: 30px; /* Bigger size */
  margin: 10px 0; /* Adjusted margin */
  text-align: left;
`;

const Subheading = styled.p`
  font-size: 20px; /* Adjusted size */
  margin: 5px 0 20px 0; /* Adjusted margin */
  text-align: left;
`;

const DescriptionText = styled.div`
  font-size: 14px;
  line-height: 1.4; /* Reduced line height */
  margin-bottom: 20px;

  p {
    margin: 10px 0;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin: 10px 0;
  }

  li {
    margin-bottom: 5px;
  }
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
`;

const CurvedDottedLine = styled.svg`
  position: absolute;
  overflow: visible;
  stroke: black;
  stroke-width: 2;
  fill: none;
  stroke-dasharray: 4;
`;

const stepsData = [
  {
    id: 1,
    title: 'Engine Out',
    subtitle: 'In Flight',
    isActive: true,
    percentage: 50,
    stars: 2,
    description: (
      <>
        <p><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Cras eu posuere mi, ac ultrices elit. Suspendisse eu neque nec orci pellentesque accumsan.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>Vestibulum auctor dapibus neque.</li>
          <li>Nunc dignissim risus id metus.</li>
        </ul>
        <p>Ut euismod vel velit imperdiet fermentum. Fusce laoreet mi vitae ante posuere ullamcorper. </p>
        <p>Cras vel orci quam. Duis viverra libero quis magna finibus euismod. Suspendisse potenti. Pellentesque sit amet tempor orci. </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Engine Fire',
    subtitle: 'In Flight',
    isActive: false,
    percentage: 0,
    stars: 0,
    description: <p>Vestibulum auctor dapibus neque...</p>,
  },
  {
    id: 3,
    title: 'Electrical Failure',
    subtitle: '',
    isActive: false,
    percentage: 0,
    stars: 0,
    description: <p>Cras eu orci quam...</p>,
  },
];

const ProcedurePage: React.FC<ProcedurePageProps> = ({ procedureId }) => {
  const [steps, setSteps] = useState(stepsData);

  useEffect(() => {
    // Fetch the procedure details based on the procedureId and update the state if necessary
    // For now, we are using static stepsData
  }, [procedureId]);

  const handleStart = (stepId: number) => {
    if (steps[0].id === stepId) {
      startProcedure(stepId); // Call function in a different file
      // Update the state or do other necessary actions
    }
  };

  const getCirclePath = (percentage: number) => {
    const radius = 40; // Adjusted radius
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return { circumference, offset };
  };

  const getPathCoordinates = (
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ) => {
    const controlX1 = startX;
    const controlY1 = startY + 60;
    const controlX2 = endX;
    const controlY2 = endY - 60;
    return `M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`;
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <StepsContainer>
          {steps.map((step, index) => (
            <div key={step.id} style={{ position: 'relative', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Step isActive={step.isActive} onClick={() => step.isActive && handleStart(step.id)}>
                <StepCircleContainer>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="lightgray"
                      strokeWidth="5"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="red"
                      strokeWidth="5"
                      fill="none"
                      strokeDasharray={getCirclePath(step.percentage).circumference}
                      strokeDashoffset={getCirclePath(step.percentage).offset}
                      transform="rotate(-90 50 50)"
                      strokeLinecap="round"
                    />
                  </svg>
                  <StepCircle isActive={step.isActive}>
                    {step.isActive ? (
                      step.percentage === 100 ? <FaStar color="white" /> : 'Start'
                    ) : (
                      <FaLock />
                    )}
                  </StepCircle>
                </StepCircleContainer>
                <StepDetails>
                  <StepTitle>{step.title}</StepTitle>
                  <StepSubtitle>{step.subtitle}</StepSubtitle>
                  <StarsContainer>
                    {[...Array(3)].map((_, index) => (
                      <StarIcon key={index} filled={index < step.stars} />
                    ))}
                  </StarsContainer>
                </StepDetails>
                {index < steps.length - 1 && (
                  <CurvedDottedLine
                    viewBox="0 0 100 200"
                    width="100"
                    height="200"
                    style={{ top: '80px', left: '0px' }} // Adjusted positioning
                  >
                    <path
                      d={getPathCoordinates(
                        50, // Start in the middle of the circle
                        88, // Start at the bottom of the current circle
                        50, // End in the middle of the next circle
                        150 // End at the top of the next circle
                      )}
                      fill="none"
                      strokeDasharray="4"
                    />
                  </CurvedDottedLine>
                )}
              </Step>
            </div>
          ))}
        </StepsContainer>
        <ContentContainer>
          <CompletionPercentage>
            <StarsContainer>
              {[...Array(3)].map((_, index) => (
                <StarIcon key={index} filled={index < steps[0].stars} />
              ))}
            </StarsContainer>
            <PercentageText>{steps[0].percentage}%</PercentageText> {/* Added spacing */}
          </CompletionPercentage>
          <Heading>{steps[0].title}</Heading>
          <Subheading>{steps[0].subtitle}</Subheading>
    
          <DescriptionText>{steps[0].description}</DescriptionText>
          <StartButton onClick={() => handleStart(steps[0].id)}>Start</StartButton>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default ProcedurePage;
