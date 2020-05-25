import React from 'react';
import styled from 'styled-components';

const Card = ({ index, characterDetails }) => {
	return (
		<CardWrapper>
			<CardImg
				src={`https://robohash.org/${index}?size=100x100`}
				alt="Robot from Robohash"
			/>
			<CardData>{JSON.stringify(characterDetails)}</CardData>
		</CardWrapper>
	);
};

export default Card;

const CardWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	flex-flow: column nowrap;

	@media only screen and (min-width: 768px) {
		width: 300px;
		min-height: 600px;
		border: 1px solid black;

		margin: 20px;
	}
`;

const CardImg = styled.img`
	@media only screen and (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;

const CardData = styled.p`
	width: 100%;

	word-break: break-all;
	white-space: normal;
`;
