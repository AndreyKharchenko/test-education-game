import React from 'react'
import styled from '@emotion/styled';
import {css} from '@emotion/css'
import Title from '../components/Title';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const ResultPage = styled.div`
    background-image: url(static/background1.jpg);
    height: 98vh;
    padding-top: 5rem;
`

const Container = styled.div`
    border: 10px solid #101F32;
    border-image: linear-gradient(to right top, #8D67DF00, #67DF89, #8D67DF00);
    border-image-slice: 1;
    height: 480px;
    width: 621px;
    margin: 0 auto;
    background-color: #FFF;
`

const ResultText = styled.div`
  font-family: Helvetica;
  font-size: 30px;
  font-weight: 400;
  line-height: 51px;
  letter-spacing: 0px;
  text-align: center;
  color: rgba(95, 64, 161, 1);
  margin-bottom: 3rem;
` 

const flexContainer = css`
    display: flex; 
    justify-content: space-evenly;
`
const Result = () => {
  const router = useRouter();
  const handleRouterClick = () => {
      router.push('/');
  }
    return (
      <ResultPage>
        <Container>
          <Title titleType='win' title='Победа!' />
          <ResultText>Молодец! Ты успешно справился с заданием!</ResultText>
          <div className={flexContainer}>
              <Button btnText='Заново' btnType='repeat' method={handleRouterClick} />
          </div>
        </Container>
      </ResultPage>
    );
  
}

export default Result;