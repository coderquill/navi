import React from 'react';

interface ProcedureDetailsProps {
  procedureId: number;
}

const ProcedureDetails: React.FC<ProcedureDetailsProps> = ({ procedureId }) => (
  <div>
    <h2>Procedure Details</h2>
    <p>Details for procedure {procedureId}</p>
    <button onClick={() => console.log('Start Procedure')}>Start</button>
  </div>
);

export default ProcedureDetails;
