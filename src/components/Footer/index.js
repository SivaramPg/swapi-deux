import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumn>
        <p>
          Made with{' '}
          <span
            style={{
              color: 'tomato',
            }}
          >
            &hearts;
          </span>{' '}
          by{' '}
          <a
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: 'darkorchid',
            }}
            href="https://sivaramp.com"
          >
            Sivaram Pandariganthan
          </a>
        </p>
      </FooterColumn>
      <FooterColumn>
        <p
          style={{
            color: 'tomato',
          }}
        >
          Built Using:
        </p>
        <TechLink>
          <img src="https://reactjs.org/favicon.ico" alt="reactjs.org" />
          &nbsp;
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </TechLink>
        <TechLink>
          <img
            src="https://styled-components.com/favicon.png"
            alt="styled-components.com"
          />
          &nbsp;
          <a
            href="https://styled-components.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </a>
        </TechLink>
      </FooterColumn>
      <FooterColumn>
        <p
          style={{
            color: 'tomato',
          }}
        >
          Data Fetched From:
        </p>
        <TechLink>
          <img src="https://swapi.info/favicon.ico" alt="swapi.info" />
          &nbsp;
          <a
            href="https://swapi.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swapi.info
          </a>
        </TechLink>
      </FooterColumn>
      <FooterColumn>
        <TechLink>
          <img
            style={{
              backgroundColor: '#fff',
            }}
            src="https://github.githubassets.com/pinned-octocat.svg"
            alt="github.com"
          />
          &nbsp;
          <a
            href="https://github.com/SivaramPg/swapi-deux"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Github
          </a>
        </TechLink>
      </FooterColumn>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100vw;
  height: 100px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: #fff;

  background-color: black;
`;

const FooterColumn = styled.div`
  flex: 0 1 25%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-flow: column nowrap;
`;

const TechLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-flow: row nowrap;

  margin: 10px 0 0 0;

  & img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  & a {
    font-size: 14px;
    color: white;
    text-decoration: none;
  }
`;
