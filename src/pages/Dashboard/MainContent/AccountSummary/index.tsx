import React, { useState } from 'react';
import { FiFileText, FiCreditCard, FiEye, FiEyeOff } from 'react-icons/fi';
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from 'styled-components';

import Button from '../../../../components/Button';

import { PlataformaPAIIcon } from '../../../../assets/images/icons';
import CreditCartIllustration from '../../../../assets/images/illustrations/card-illustration.png';

import { lineChartData } from '../../../../resources/';

import { Container, Card, Header, DataWrapper, LeftData, RightData, DataValue, CustomTooltip } from './styles';

type ChartValue = number | React.ReactText | undefined;

const formatChartValue = (value: ChartValue): string => `${value || 0}%`;


const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(false);
  const [displayInvestments, setDisplayInvestments] = useState(false);
  const [investmentGrowth, setInvestmentGrowth] = useState(() => {
    const [investments] = lineChartData;
    const { y } = investments.data[investments.data.length - 1];
    return formatChartValue(y);
  });

  const { colors } = useTheme();

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
            <DataValue income>{displayStatement ? 'R$ 5.750,00' : '---'}</DataValue>

            <span>Despesas</span>
            <DataValue outcome>{displayStatement ? investmentGrowth : '---'}</DataValue>
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
            <ResponsiveLine
              data={lineChartData}
              useMesh
              enableArea
              enableCrosshair={false}
              curve='cardinal'
              margin={{ top: 8, right: 8, bottom: 20, left: 8 }}
              xScale={{ type: 'point' }}
              yScale={{ 
                type: 'linear', 
                min: 'auto', 
                max: 'auto', 
                stacked: true, 
                reverse: false, 
              }}
              tooltip={({ point }) => {
                return (
                  <CustomTooltip>
                    {formatChartValue(point.data.yFormatted)}
                  </CustomTooltip>
                );
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
              }}
              axisLeft={null}
              colors={colors.success}
              lineWidth={1.5}
              pointSize={8}
              pointColor={colors.success}
              pointLabel='y'
              pointLabelYOffset={-12}
              enableGridY={false}
            />
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