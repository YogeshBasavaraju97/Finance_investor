import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { CompanySearch } from './company';

import './App.css';

import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>('');
  const [portfolioValues, setportfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exist = portfolioValues.find((value) => value === e.target[0].value);
    if (exist) return;
    const updatedportfolio = [...portfolioValues, e.target[0].value];
    setportfolioValues(updatedportfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const remove = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setportfolioValues(remove);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === 'string') {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  return (
    <div className="App">
      <Navbar />

      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <div>Unable to connect to API</div>}
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
}
export default App;
