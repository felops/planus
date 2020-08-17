import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="vantagens">
    <StyledContainer>
      <Subtitle>Vantagens</Subtitle>
      <SectionTitle>Planejamento Financeiro Simplificado</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Personalizado</FeatureTitle>
          <FeatureText>
            Planejamento de acordo com as suas necessidades.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Especializado</FeatureTitle>
          <FeatureText>
            Nosso sistema entrega soluções contruídas por especialistas.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Seguro</FeatureTitle>
          <FeatureText>
            Tenha segurança com uma diversificação descorrelacionada e com estratégia complementar.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Sem Vieses</FeatureTitle>
          <FeatureText>
            Siga seu planejamento de forma sistemática, sem deixar que a emoção atrapalhe seus rendimentos.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
