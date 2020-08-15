import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';


const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      
      <Container>
        <div>Hello World</div>
      </Container>
    </>
  );
}

export default Dashboard;
