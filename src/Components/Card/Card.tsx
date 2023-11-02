import React, { SyntheticEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio';

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
    <div className="card" style={{ width: 500 }}>
      <img className=" card-img-top" alt="company logo" />

      <div className="card-body justify-content-center">
        <h2 className="card-title">{searchResult.name}</h2>
        <p>
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
      </div>

      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
