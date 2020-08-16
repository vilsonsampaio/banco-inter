import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { cardsNavigation } from '../../../../resources';

import Button from '../../../../components/Button';

import { Container, Card, Navigation } from './styles';


const NavigationCards: React.FC = () => {
  return (
    <Container>
      <Navigation>
        {Object.entries(cardsNavigation).map(([key, value]) => (
          <Card key={`card-${key}`}>
            <div>{value.icon}</div>
            {key}
          </Card>
        ))}
      </Navigation>

      <Button>
        <FiArrowRight />
      </Button>
    </Container>
  );
}

export default NavigationCards;