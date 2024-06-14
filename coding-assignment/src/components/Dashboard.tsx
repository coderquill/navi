import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowRight, FaStar } from 'react-icons/fa'; // Import necessary icons
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e3f2fd; /* Faint baby blue background */
  padding: 20px;
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Prevent scrolling */
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 20px; /* Add gap between cards */
  width: 100%; /* Full width */
  height: 40vh; /* Adjust height to take less of the viewport height */
  &::-webkit-scrollbar {
    height: 6px;  /* Thin scrollbar */
    background: #cfd8dc;  /* Scrollbar background color (slightly darker) */
  }
  &::-webkit-scrollbar-thumb {
    background: #90a4ae; /* Thumb color */
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #607d8b; /* Thumb color on hover */
  }
`;

const RecentProceduresContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 20px; /* Add gap between cards */
  width: 100%; /* Full width */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers */
  }
`;

const RecentProcedureCard = styled(Link)`
  background: #f5f5f5; /* Light gray background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px; /* Smaller width */
  height: 120px; /* Smaller height */
  flex-shrink: 0;
  position: relative;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProcedureTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const ProcedureSubtitle = styled.p`
  font-size: 12px;
  color: #757575;
  margin: 0;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 8px;
`;

const Star = styled(FaStar)`
  color: #dcdcdc; /* Gray color for empty stars */
  &.filled {
    color: #ffffff; /* White color for filled stars */
  }
`;

const Card = styled(Link)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; /* Adjust width for a vertical rectangle shape */
  height: 100%; /* Adjust height to fill the container */
  flex-shrink: 0;
  position: relative;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.div<{ backgroundImage: string }>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center the content vertically */
  align-items: center; /* Center the content horizontally */
  height: 40%; /* Start slightly below the middle */
`;

const CompletionPercentage = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  text-align: center;
`;

const CardSubtitle = styled.p`
  font-size: 14px;
  margin: 5px 0;
  text-align: center;
`;

const CardIcons = styled.div`
  display: flex;
  justify-content: center; /* Center the icons */
  gap: 20px; /* Space out the icons */
  margin-top: 10px;
`;

const cardDetails = [
  {
    id: 1,
    image: card1,
    title: 'Emergency Procedures',
    subtitle: 'Some sub heading here',
    completion: '50%',
    link: '/procedure/1'
  },
  {
    id: 2,
    image: card2,
    title: 'Pre-Flight Procedures',
    subtitle: 'Some sub heading here',
    completion: '0%',
    link: '/procedure/2'
  },
  {
    id: 3,
    image: card3,
    title: 'CFI',
    subtitle: 'Some sub heading here',
    completion: '0%',
    link: '/procedure/3'
  }
];

// Repeat all three card details to create more cards
const extendedCardDetails = Array.from({ length: 17 }, (_, index) => ({
  ...cardDetails[index % 3],
  id: cardDetails.length + index + 1,
  link: `/procedure/${cardDetails.length + index + 1}`,
  title: `${cardDetails[index % 3].title} ${index + 1}`,
  subtitle: `${cardDetails[index % 3].subtitle} ${index + 1}`,
  completion: `${Math.floor(Math.random() * 101)}%`
}));

const allCardDetails = [...cardDetails, ...extendedCardDetails];

// Dummy recent procedures data
const recentProcedures = [
  {
    id: 4,
    title: 'Engine Out',
    subtitle: 'During Flight',
    stars: 2,
    link: '/procedure/4',
  },
  {
    id: 5,
    title: 'Engine Fire',
    subtitle: 'During Flight',
    stars: 1,
    link: '/procedure/5',
  },
  {
    id: 6,
    title: 'Electrical Failure',
    subtitle: '',
    stars: 3,
    link: '/procedure/6',
  },
];

// Repeat the recent procedures to create more items
const extendedRecentProcedures = Array.from({ length: 17 }, (_, index) => ({
  ...recentProcedures[index % 3],
  id: recentProcedures.length + index + 1,
  link: `/procedure/${recentProcedures.length + index + 1}`,
  title: `${recentProcedures[index % 3].title} ${index + 1}`,
  subtitle: `${recentProcedures[index % 3].subtitle} ${index + 1}`,
  stars: (index % 3) + 1
}));

const allRecentProcedures = [...recentProcedures, ...extendedRecentProcedures];

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <h2>Procedural Trainer</h2>
      <CardsContainer className="cards-container">
        {allCardDetails.map((card) => (
          <Card key={card.id} to={card.link}>
            <CardImage backgroundImage={card.image}>
              <CompletionPercentage>{card.completion}</CompletionPercentage>
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardSubtitle>{card.subtitle}</CardSubtitle>
                <CardIcons>
                  <FaArrowRight />
                  <FaStar />
                </CardIcons>
              </CardContent>
            </CardImage>
          </Card>
        ))}
      </CardsContainer>
      <h2>Recent Procedures</h2>
      <RecentProceduresContainer>
        {allRecentProcedures.map((procedure) => (
          <RecentProcedureCard key={procedure.id} to={procedure.link}>
            <ProcedureTitle>{procedure.title}</ProcedureTitle>
            {procedure.subtitle && <ProcedureSubtitle>{procedure.subtitle}</ProcedureSubtitle>}
            <StarsContainer>
              {[...Array(3)].map((_, index) => (
                <Star key={index} className={index < procedure.stars ? 'filled' : ''} />
              ))}
            </StarsContainer>
          </RecentProcedureCard>
        ))}
      </RecentProceduresContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
