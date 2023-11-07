import React, { ChangeEvent, SyntheticEvent } from 'react';

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <input
          value={search}
          onChange={handleSearchChange}
          className="rounded-pill p-2 "
        />
      </form>
    </div>
  );
};

export default Search;
