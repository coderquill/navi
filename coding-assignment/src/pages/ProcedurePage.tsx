export {};

import React from 'react';
import ProcedureDetails from '../components/ProcedureDetails';
import { useParams } from 'react-router-dom';

const ProcedurePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <ProcedureDetails procedureId={parseInt(id!)} />;
};

export default ProcedurePage;
