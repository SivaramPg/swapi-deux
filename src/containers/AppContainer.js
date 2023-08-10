import React, { useState, useEffect } from 'react';

import { PageContainer, Title, SubTitle } from '../components/Styled';
import SearchBox from '../components/SearchBox';
import CardsContainer from '../containers/CardsContainer';
import Loader from '../components/Loader';
import Footer from '../components/Footer';

const AppContainer = () => {
  const [isLoading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [characterDetails, setCharacterDetails] = useState([]);
  const [filteredCharacterDetails, setFilteredCharacterDetails] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const characters = await fetch('https://swapi.info/api/people').then(
          (res) => res.json()
        );

        const usableCharacters = characters;

        setFilteredCharacterDetails((filteredCharacterDetails) => [
          ...filteredCharacterDetails,
          ...usableCharacters,
        ]);

        setCharacterDetails((characterDetails) => [
          ...characterDetails,
          ...usableCharacters,
        ]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (characterDetails.length) {
      setLoading(false);
    }
  }, [characterDetails]);

  const onSearch = (e) => {
    const { value } = e.target;

    setSearchText(value);

    const filteredCharacterDetails = characterDetails.filter((obj) =>
      obj.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCharacterDetails(filteredCharacterDetails);
  };

  return (
    <React.Fragment>
      <PageContainer>
        <Title>Star Wars Characters</Title>
        <SubTitle>
          A list of people from the star wars universe fetched from{' '}
          <a href="https://swapi.info" rel="noreferrer" target="_blank">
            Swapi.info
          </a>
        </SubTitle>
        <SearchBox searchText={searchText} onSearch={onSearch} />
        <CardsContainer characterDetails={filteredCharacterDetails} />
        <Footer />
      </PageContainer>
      {isLoading && <Loader />}
    </React.Fragment>
  );
};

export default AppContainer;
