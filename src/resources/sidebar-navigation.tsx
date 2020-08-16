import React from 'react';

import {
  FiSmartphone,
  FiDollarSign,
  FiBarChart2,
  FiPieChart,
  FiUmbrella,
  FiShield,
} from 'react-icons/fi';


export default {
  'Conta Digital': {
    icon: <FiSmartphone />,
  },
  'Crédito': {
    icon: <FiDollarSign />,
  },
  'Investimentos': {
    icon: <FiBarChart2 />,
  },
  'IDTVM': {
    icon: <FiPieChart />,
  },
  'Seguros': {
    icon: <FiUmbrella />,
  },
  'Recarga de Celular': {
    icon: <FiSmartphone />,
  },
  'Sua Segurança': {
    icon: <FiShield />,
  },
} as const;