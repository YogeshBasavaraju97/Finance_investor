import React from 'react';
import { testIncomeStatementData } from './Tabledata';

type Props = {};

const data = testIncomeStatementData;
type company = (typeof data)[0];

const config = [
  {
    label: 'year',
    render: (company: company) => company.acceptedDate,
  },
  {
    label: 'Cost of Revenue',
    render: (company: company) => company.costOfRevenue,
  },
];
const Table = (props: Props) => {
  const renderRow = data.map((company) => {
    return (
      <tr key={company.cik}>
        {config.map((val: any) => {
          return (
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 ">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  const renderHeaders = config.map((config: any) => {
    return (
      <>
        <th className="p-4 text-left text-xs font-medium text-fray-500">
          {config.label}
        </th>
      </>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <table>
        <thead>{renderHeaders}</thead>
        <tbody>{renderRow}</tbody>
      </table>
    </div>
  );
};

export default Table;
