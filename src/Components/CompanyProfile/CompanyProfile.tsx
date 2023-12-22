import React from 'react';
import { CompanyKeyMetrics } from '../../company';

type Props = {};

const tableConfig = [
  {
    label: 'Market Cap',
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
  {
    label: 'Current Ratio',
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: 'Return On Equity',
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: 'Cash Per Share',
    render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
  },
  {
    label: 'Current Ratio',
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: 'Return On Equity',
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
];

const ComapnyProfile = (props: Props) => {
  return <div>ComapnyProfile</div>;
};

export default ComapnyProfile;
