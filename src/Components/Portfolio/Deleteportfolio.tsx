import React, { SyntheticEvent } from 'react';

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const Deleteportfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button type="submit">Delete</button>
      </form>
    </>
  );
};

export default Deleteportfolio;
