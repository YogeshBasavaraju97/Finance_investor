import React, { SyntheticEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="flex  justify-content-between" key={id} id={id}>
      <h2 className=" text-center text-veryDarkViolet md:text-left">
        {searchResult.name} ({searchResult.symbol})
      </h2>

      <div className="text-veryDarkBlue">{searchResult.currency}</div>

      <p className="font-bold text-veryDarkBlue">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
