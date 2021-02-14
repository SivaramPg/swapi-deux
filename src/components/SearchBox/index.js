import React from 'react';
import styled from 'styled-components';

const SearchBox = ({ searchText, onSearch }) => {
  return (
    <SearchInput
      type="text"
      onChange={onSearch}
      value={searchText}
      placeholder="Search for a Star Wars character"
    />
  );
};

export default SearchBox;

const SearchInput = styled.input`
  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 50px;

    border-radius: 5px;
    padding: 0 20px;
    font-size: 24px;
    margin: 20px 0;
  }
`;
