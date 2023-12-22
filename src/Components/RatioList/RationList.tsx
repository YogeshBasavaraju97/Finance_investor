import { TestDataCompany } from '../../Table/Tabledata';

const data = TestDataCompany[0];
type Props = {};

type Company = typeof data;

const config = [
  {
    label: 'company Name',
    render: (company: Company) => company.companyName,
  },
];
const RatioList = (props: Props) => {
  const renderRow = config.map((row) => {
    return (
      <li className="py-3 sm:py-4">
        <div className=" flex item-center space-x-4">
          <div className="flex 1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.label}
            </p>
          </div>
          <div className=" inline-flex justify-end items-center text-base font-semibold text-grey-900">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="bg-white shadow  rounded-lg mb-4 p-4 sm:p-6 h-full">
      <ul className="divide-y divided-gray-200">{renderRow}</ul>
    </div>
  );
};

export default RatioList;
