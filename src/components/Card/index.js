import React from 'react';
import styled from 'styled-components';

const Card = ({ index, characterDetails }) => {
	const {
		name,
		height,
		mass,
		hair_color,
		skin_color,
		eye_color,
		birth_year,
		gender,
	} = characterDetails;
	return (
		<CardWrapper>
			<CardObject
				data={`https://robohash.org/${index}?size=100x100`}
				type="image/png"
			>
				<CardImg
					src={`https://robohash.org/default?size=100x100`}
					alt="Robot from Robohash"
				/>
			</CardObject>
			<CharacterName>{name}</CharacterName>
			<CardData>
				<h4>Height : {height}</h4>
				<h4>Mass: {mass}</h4>
				<h4>Hair Color: {hair_color}</h4>
				<h4>Skin Color: {skin_color}</h4>
				<h4>Eye Color : {eye_color}</h4>
				<h4>Birth Year: {birth_year}</h4>
				<h4>Gender : {gender}</h4>
			</CardData>
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
		width: 250px;
		min-height: 400px;

		border-radius: 10px;

		margin: 20px;

		background-color: #fff;

		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

		&:hover {
			box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
				0 10px 10px rgba(0, 0, 0, 0.22);
		}
	}
`;

const CardObject = styled.object`
	@media only screen and (min-width: 768px) {
		width: 100px;
		height: 100px;

		border-radius: 50%;

		border: 1px solid #ddd;

		margin-top: 20px;
	}
`;

const CardImg = styled.img`
	@media only screen and (min-width: 768px) {
		width: 100px;
		height: 100px;

		border-radius: 50%;

		border: 1px solid #ddd;

		margin-top: 20px;
	}
`;

const CharacterName = styled.h2`
	margin: 20px 0;

	text-align: center;
	text-transform: uppercase;
`;

const CardData = styled.div`
	width: 100%;

	text-align: center;

	& > h4 {
		margin: 10px 0;
		text-transform: capitalize;

		&:last-of-type {
			margin-bottom: 20px;
		}
	}
`;
