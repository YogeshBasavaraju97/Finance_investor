import React from 'react';
import RatioList from '../Components/RatioList/RationList';

import Table from '../Table/Table';
import { TestDataCompany } from '../Table/Tabledata';

type Props = {};

const data = TestDataCompany;

const tableConfig = [
  {
    label: 'symbol',
    render: (company: any) => company.symbol,
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <RatioList />
      <Table />
    </>
  );
};

export default DesignGuide;
