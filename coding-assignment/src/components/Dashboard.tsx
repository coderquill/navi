import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa'; // Import necessary icons
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import '../styles/Dashboard.css';

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
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions).toUpperCase();

  return (
    <div className="dashboard-container">
      <div className="date">{formattedDate}</div>
      <h1 className="main-title">Procedural Trainer</h1>
      <div className="cards-container">
        {allCardDetails.map((card) => (
          <Link key={card.id} to={card.link} className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="completion-percentage">{<h1>{card.completion}</h1>}</div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
                <div className="card-icons">
                  <FaArrowRight />
                  <FaStar />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <h2 className="recent-title">Recent Procedures</h2>
      <div className="recent-procedures-container">
        {allRecentProcedures.map((procedure) => (
          <Link
            key={procedure.id}
            to={procedure.link}
            className="recent-procedure-card"
          >
            <div className="stars-container">
              {[...Array(3)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`star ${index < procedure.stars ? 'filled' : ''}`}
                />
              ))}
            </div>
            <p className="procedure-title">{procedure.title}</p>
            {procedure.subtitle && (
              <p className="procedure-subtitle">{procedure.subtitle}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
