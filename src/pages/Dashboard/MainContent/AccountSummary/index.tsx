import React, { useState, useMemo } from 'react';
import { FiFileText, FiCreditCard, FiEye, FiEyeOff } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';

import Button from '../../../../components/Button';

import { PlataformaPAIIcon } from '../../../../assets/images/icons';
import CreditCartIllustration from '../../../../assets/images/illustrations/card-illustration.png';
import { ReactComponent as HiddenData } from '../../../../assets/images/illustrations/hidden-data.svg'

import { barChartData, lineChartData } from '../../../../resources/';

import { Container, Card, Header, DataWrapper, LeftData, RightData, DataValue, CustomTooltip } from './styles';

type FormatChartValueType = number | React.ReactText | undefined;
type FormatToR$ValueType = number | React.ReactText;

const formatChartValue = (value: FormatChartValueType): string => `${value || 0}%`;
const formatToR$Value = (value: FormatToR$ValueType): string => `${value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;


const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(false);
  const [displayInvestments, setDisplayInvestments] = useState(false);

  const investmentGrowth = useMemo(() => {
    const [investments] = lineChartData;
    const { y } = investments.data[investments.data.length - 1];

    return formatChartValue(y);
  }, []);

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
          <LeftData>
            {displayStatement
              ? (
                <ResponsiveBar 
                  data={barChartData}
                  indexBy="month"
                  keys={['outcome', 'income']}
                  colors={({ id, data }) => data[`${id}Color`]}
                  margin={{ top: 8, right: -8, bottom: 24, left: -8 }}
                  padding={0.88}
                  borderRadius={2}
                  axisTop={null}
                  axisRight={null}
                  axisLeft={null}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 8,
                    tickRotation: 0,
                  }}
                  tooltip={(chart) => {
                    const label = chart.id === 'income' ? 'Receita' : 'Despesas';
                    const value = chart.data[chart.id];

                    return (
                      <CustomTooltip
                        rightArrow={chart.index >= 3}
                        leftArrow={chart.index < 3}
                      >
                        {`${label}: ${formatToR$Value(value)}`}
                      </CustomTooltip>
                    );
                  }}
                  theme={{
                    tooltip: {
                      container: {
                        background: 'transparent',
                        boxShadow: 'none',
                        padding: 0,
                        borderRadius: 0,
                      },
                      tableCell: {
                        padding: 0,
                      },
                    },
                  }}
                  animate
                  motionStiffness={90}
                  motionDamping={15}
                  enableGridY={false}
                  enableLabel={false}
                />
              )
              : (
                <HiddenData />
              )
            }
            
          </LeftData>

          <RightData>
            <span>Receita</span>
            <DataValue income>
              {displayStatement 
                ? formatToR$Value(barChartData[barChartData.length - 1].income) 
                : '---'
              }
            </DataValue>

            <span>Despesas</span>
            <DataValue outcome>
              {displayStatement 
                ? formatToR$Value(barChartData[barChartData.length - 1].outcome) 
                : '---'
              }
            </DataValue>
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
            <img 
              src={CreditCartIllustration} 
              alt="Cartão de Crédito Sem Anuidade" 
            />
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
            {displayInvestments
              ? (
                <ResponsiveLine
                  data={lineChartData}
                  useMesh
                  enableArea
                  enableCrosshair={false}
                  curve='cardinal'
                  margin={{ top: 8, right: 8, bottom: 24, left: 12 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
                  tooltip={({ point }) => {
                    return (
                      <CustomTooltip>
                        {formatChartValue(point.data.yFormatted)}
                      </CustomTooltip>
                    );
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{ orient: 'bottom', tickSize: 0, tickPadding: 8, tickRotation: 0 }}
                  axisLeft={null}
                  colors={colors.success}
                  lineWidth={1.5}
                  pointSize={8}
                  pointColor={colors.success}
                  pointLabel='y'
                  pointLabelYOffset={-12}
                  enableGridY={false}
                />
              )
              : (
                <HiddenData />
              )
            }
          </LeftData>

          <RightData>
            <span>Total investido</span>
            <DataValue>
              {displayInvestments 
                ? formatToR$Value(lineChartData[0].investedAmount)
                : '---'
              }
            </DataValue>

            <span>Evolução no mês</span>
            <DataValue>
              {displayInvestments 
                ? investmentGrowth
                : '---'
              }
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
}

export default AccountSummary;