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
    <div className="container-lg" key={id} id={id}>
      <div className="card">
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
    </div>
  );
};

export default Card;
