import React from 'react';
import { FiBarChart2 } from 'react-icons/fi';

import { dashboardNavigation } from '../../../resources';

import Dropdown from './Dropdown';
import AccountBalance from './AccountBalance';

import { Container, AmountInvested } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <AccountBalance />
      
      <AmountInvested>
        Ver Total Investido
        
        <FiBarChart2 size="1.6rem" />
      </AmountInvested>

      {Object.entries(dashboardNavigation).map(([key, value]) => (
        <Dropdown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>  
  );
}

export default Sidebar;
