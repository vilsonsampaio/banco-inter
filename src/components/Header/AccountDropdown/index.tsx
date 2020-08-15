import React from 'react';
import { useTheme } from 'styled-components';

import { User } from '../Header';

import removeHashFromColor from '../../../utils/removeHashFromColor';

import { Container } from './styles';

type AccountDropdownProps = {
  user: User;
}

const AccountDropdown: React.FC<AccountDropdownProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;

  return (
    <Container>
      <img 
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${
            removeHashFromColor(lightGrey)
          }&color=${
            removeHashFromColor(secondary)
          }&name=${user.name}`} 
        alt="user" 
      />
    </Container>
  );
}

export default AccountDropdown;
