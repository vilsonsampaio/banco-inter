import React, { useState } from 'react';
import { FiFileText, FiCreditCard, FiEye, FiEyeOff } from 'react-icons/fi';

import Button from '../../../../components/Button';

import { PlataformaPAIIcon } from '../../../../assets/images/icons';
import CreditCartIllustration from '../../../../assets/images/illustrations/card-illustration.png';

import { Container, Card, Header, DataWrapper, LeftData, RightData, DataValue } from './styles';


const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(false);
  const [displayInvestments, setDisplayInvestments] = useState(false);


  return (
    <Container>
      <Card>
        <Header iconStroke={true}>
          <FiFileText />
          <h3>Extrato</h3>

          <Button 
            variant="transparent" 
            onClick={() => setDisplayStatement((prevState) => !prevState)}
          >
            {displayStatement ? <FiEye /> : <FiEyeOff />}
          </Button>
        </Header>

        <DataWrapper>
          <LeftData>Gráfico</LeftData>

          <RightData>
            <span>Receita</span>
            <DataValue income>{displayStatement ? 'R$ 8.552,22' : '---'}</DataValue>

            <span>Despesas</span>
            <DataValue outcome>{displayStatement ? 'R$ 7.948,55' : '---'}</DataValue>
          </RightData>
        </DataWrapper>
      </Card>

      <Card>
        <Header iconStroke={true}>
          <FiCreditCard />
          <h3>Mastercard 8430</h3>
        </Header>

        <DataWrapper>
          <LeftData>
            <img src={CreditCartIllustration} alt="Cartão de Crédito Sem Anuidade" />
          </LeftData>

          <RightData>
            <span>Seu cartão é MasterCard e sem anuidade!</span>
          </RightData>
        </DataWrapper>
      </Card>

      <Card>
        <Header iconStroke={false}>
          <PlataformaPAIIcon />
          <h3>Plataforma Aberta Inter</h3>

          <Button 
            variant="transparent" 
            onClick={() => setDisplayInvestments((prevState) => !prevState)}
          >
            {displayInvestments ? <FiEye /> : <FiEyeOff />}
          </Button>
        </Header>

        <DataWrapper>
          <LeftData>
            Gráfico
          </LeftData>

          <RightData>
            <span>Total investido</span>
            <DataValue>{displayInvestments ? 'R$ 5.750,00' : '---'}</DataValue>

            <span>Evolução no mês</span>
            <DataValue>{displayInvestments ? '20%' : '---'}</DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
}

export default AccountSummary;