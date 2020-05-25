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

		display: flex;
		justify-content: space-evenly;
		align-items: center;

		flex-flow: row wrap;

		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

		background-color: paleturquoise;

		padding: 20px 0;
		margin-bottom: 100px;

		/* width */
		::-webkit-scrollbar {
			width: 5px;
		}

		/* Track */
		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
			background: #888;
			border-radius: 2.5px;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
	}
`;
