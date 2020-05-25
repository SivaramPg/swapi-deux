import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterWrapper>
			<h1>Footer</h1>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.div`
	width: 100vw;
	height: 100px;

	color: #fff;

	background-color: black;
`;
