import { useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
// eslint-disable-next-line no-unused-vars -- false positive error
import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { Container } from '../../components/Container';
import media from '../../globalStyles/media';

const StyledFooter = styled.footer`
  background-color: #0d5dbf;
  overflow: hidden;
  padding: 20px 0;
  ${media.greaterThan('md')`
    padding: 30px 0;
  `}
  color: ${({ theme }) => theme.color.white};
`;

const TopSection = styled.div`
  margin-top: 42px;
  padding-bottom: 56px;
`;

const StyledContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const StyledContainerCentered = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 40px;
`;

const ShowcaseCardContainer = styled.div`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  border: 2px dashed white;
  max-width: 20%;
`;

const ShowcaseCardText = styled.p`
  text-align: center;
  padding-top: 1.5em;
  font-size: 18px;
`;

const SectionListItem = styled.li`
  margin-bottom: 10;
`;

const SectionListButton = styled.button`
  background-color: inherit;
  border: none;
  font-size: 18px;
  color: white;
  padding: 0;
`;

const SectionListLink = styled.a`
  background-color: inherit;
  border: none;
  font-size: 18px;
  color: white;
  text-decoration: none;
`;

const Mail = styled.a`
  font-size: 18px;
  color: white;
  text-decoration: none;
`;

const siteMapData = [
  {
    name: 'Demo',
    link: 'demo',
  },
  {
    name: 'Docs',
    link: 'docs',
  },
  {
    name: 'Custom solutions',
    link: 'https://www.vazco.eu/',
  },
];

const firstStepsData = [
  {
    name: 'Installation',
    link: 'https://forminer.com/docs/installation',
  },
  {
    name: 'Handling custom components',
    link: 'https://forminer.com/docs/custom-components',
  },
  {
    name: 'Integration',
    link: 'https://forminer.com/docs/integration',
  },
];

export const Footer = () => {
  const theme = useTheme();
  const columnView = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (
    event: MouseEvent<HTMLButtonElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const pricingSection = document.getElementById(sectionId);

    if (pricingSection) {
      pricingSection.scrollIntoView();
    }
  };

  return (
    <StyledFooter>
      <Container>
        <TopSection>
          <Box
            gridColumnGap={50}
            display="flex"
            flexDirection={columnView ? 'column' : 'row'}
            alignContent="space-around"
            justifyContent="center"
            flexWrap="wrap"
          >
            <ShowcaseCardContainer>
              <img
                width={75}
                height={75}
                alt="forminer logo"
                src="img/forminer-logo.svg"
              />
              <ShowcaseCardText>
                Powerful tool for building forms in React
              </ShowcaseCardText>
            </ShowcaseCardContainer>
            <StyledContainer>
              <h4>Site map</h4>
              <ul>
                <SectionListItem>
                  <SectionListButton
                    onClick={event => scrollToSection(event, 'pricing')}
                  >
                    Pricing
                  </SectionListButton>
                </SectionListItem>
                {siteMapData.map(item => (
                  <SectionListItem key={item.link}>
                    <SectionListLink href={item.link}>
                      {item.name}
                    </SectionListLink>
                  </SectionListItem>
                ))}
              </ul>
            </StyledContainer>
            <StyledContainer>
              <h4>First steps</h4>
              <ul>
                {firstStepsData.map(item => (
                  <SectionListItem key={item.link}>
                    <a
                      style={{
                        backgroundColor: 'inherit',
                        border: 'none',
                        fontSize: '18px',
                        color: 'white',
                        textDecoration: 'none',
                      }}
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </SectionListItem>
                ))}
              </ul>
            </StyledContainer>
            <StyledContainerCentered>
              <h4>Start a conversation!</h4>
              <Mail href="mailto:hello@forminer.com">hello@forminer.com</Mail>
              <CopyrightContainer>
                <a
                  href="https://www.vazco.eu/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src="img/vazco-logo-2023.svg"
                    alt="Vazco.eu"
                    width="150"
                    height="auto"
                  />
                </a>
                <p
                  style={{ marginBottom: 0 }}
                >{`Copyright © ${new Date().getFullYear()}`}</p>
                <p>All Rights Reserved</p>
              </CopyrightContainer>
            </StyledContainerCentered>
          </Box>
        </TopSection>
      </Container>
    </StyledFooter>
  );
};
