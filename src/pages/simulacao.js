import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import { formatToBRL, formatToNumber, parseToNumber } from 'brazilian-values'

import { Container } from "../components/global"
import SEO from "../components/common/layout/seo"

const NotFoundPage = () => {
  const [step, setStep] = useState(0)
  const [age, setAge] = useState('')
  const [retirementAge, setRetirementAge] = useState('')
  const [retirementSalary, setRetirementSalary] = useState('')
  const [expenses, setExpenses] = useState('')
  const [salary, setSalary] = useState('')

  const formatValue = number => number === 0 ? '' : formatToNumber(parseToNumber(number))

  const ageInput = (
    <>
      <h4>Qual sua idade hoje?</h4>
      <StyledNumber
        autoFocus
        type="number"
        placeholder="30"
        value={age}
        onChange={e => setAge(parseToNumber(e.currentTarget.value))}
      /> anos
    </>
  )
  const retirementAgeInput = (
    <>
      <h4>Com qual idade gostaria de se aposentar?</h4>
      <StyledNumber
        autoFocus
        type="number"
        placeholder="60"
        value={retirementAge}
        onChange={e => setRetirementAge(parseToNumber(e.currentTarget.value))}
      /> anos
    </>
  )
  const retirementSalaryInput = (
    <>
      <h4>Quanto gostaria de receber mensalmente na aposentatoria?</h4>
      R$ <StyledValue
        autoFocus
        placeholder="0,00"
        value={retirementSalary}
        onChange={e => setRetirementSalary(formatValue(e.currentTarget.value))}
      />
    </>
  )
  const expensesInput = (
    <>
      <h4>Qual seu gasto mensal hoje?</h4>
      R$ <StyledValue
        autoFocus
        placeholder="0,00"
        value={expenses}
        onChange={e => setExpenses(formatValue(e.currentTarget.value))}
      />
    </>
  )
  const salaryInput = (
    <>
      <h4>Qual seu salário hoje?</h4>
      R$ <StyledValue
        autoFocus
        placeholder="0,00"
        value={salary}
        onChange={e => setSalary(formatValue(e.currentTarget.value))}
      />
    </>
  )
  const calculateRetirement = (yearRate) => {
    const yearsToRetire = retirementAge - age
    const investment = parseToNumber(salary) - parseToNumber(expenses)
    const totalValue = investment * yearsToRetire * 12
    return totalValue * Math.pow(1 + yearRate / 12, yearsToRetire / 12)
  }

  const summary = (
    <div>
      <table>
        <tbody>
          <tr>
            <td><b>Idade Atual: </b></td>
            <td>{age}</td>
          </tr>
          <tr>
            <td><b>Idade Aposentadoria: </b></td>
            <td>{retirementAge}</td>
          </tr>
          <tr>
            <td><b>Renda Aposentadoria: </b></td>
            <td>{formatToBRL(parseToNumber(retirementSalary))}</td>
          </tr>
          <tr>
            <td><b>Gastos Mensais: </b></td>
            <td>{formatToBRL(parseToNumber(expenses))}</td>
          </tr>
          <tr>
            <td><b>Renda Atual: </b></td>
            <td>{formatToBRL(parseToNumber(salary))}</td>
          </tr>
        </tbody>
      </table>
      <h4>Recomendação:</h4>
      <table>
        <tbody>
          <tr>
            <td><b>Reserva de Emergência: </b></td>
            <td>{formatToBRL(parseToNumber(expenses) * 6)}</td>
          </tr>
          <tr>
            <td><b>Conservador (2% a.a.): </b></td>
            <td>{formatToBRL(calculateRetirement(2))}</td>
          </tr>
          <tr>
            <td><b>Moderado (4% a.a.): </b></td>
            <td>{formatToBRL(calculateRetirement(4))}</td>
          </tr>
          <tr>
            <td><b>Balanceado (6% a.a.): </b></td>
            <td>{formatToBRL(calculateRetirement(6))}</td>
          </tr>
          <tr>
            <td><b>Agressivo (8% a.a.): </b></td>
            <td>{formatToBRL(calculateRetirement(8))}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

  return (
    <Layout>
      <SEO title="Simulação" />
      <StyledContainer>
        <h2>Simulação</h2>
        {
          {
            0: ageInput,
            1: retirementAgeInput,
            2: retirementSalaryInput,
            3: expensesInput,
            4: salaryInput,
            5: summary
          }[step]
        }
        {
          step === 5
            ? <NextButton onClick={() => setStep(0)}>Simular novamente</NextButton>
            : <NextButton onClick={() => setStep(step + 1)}>Próximo</NextButton>
        }
      </StyledContainer>
    </Layout>
)}

export default NotFoundPage

const StyledContainer = styled(Container)``

const StyledNumber = styled.input`
  border: none;
  width: 6.8rem;
  font-size: 5rem;
  :focus{
    outline: none;
  };
  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.1;
  };
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`

const StyledValue = styled(StyledNumber)`
  width: 30rem;
`

const NextButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  margin-top: 2rem;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
