import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';

const CardsContainer = ({ characterDetails }) => {
	return (
		<CardsSection>
			{characterDetails.length
				? characterDetails.map((character, i) => (
						<Card key={i} index={i} characterDetails={character} />
				  ))
				: null}
		</CardsSection>
	);
};

export default CardsContainer;

const CardsSection = styled.section`
	@media only screen and (min-width: 768px) {
		width: 90vw;
		max-height: 80vh;

		overflow-y: scroll;

		border: 1px solid black;

		display: flex;
		justify-content: space-evenly;
		align-items: center;

		flex-flow: row wrap;
	}
`;
