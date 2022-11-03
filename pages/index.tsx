import React, { useState } from 'react';
//import { useRouter } from 'next/router';
import Router from 'next/router';
import {css} from '@emotion/css'
import styled from '@emotion/styled';
import Button from '../components/Button';
import Title from '../components/Title';
import Slider from '../components/Slider';

const MainPage = styled.div`
    background-image: url(static/background1.jpg);
    height: 98vh;
`

const Container = styled.div`
    border: 10px solid #101F32;
    border-image: linear-gradient(to right top, #101F32, #7F75F0, #101F32);
    border-image-slice: 1;
    
    height: 660px;
    width: 699px;
    margin: 0 auto;
    background-color: #FFF;
`

const flexContainer = css`
    display: flex; 
    justify-content: space-evenly;
`

const Index = () => {
    const [upDown, setUpDown] = useState<string>('up');
    const handleActiveBtn = (val: string) => {
        setUpDown(val);
    }

    const[countSliderEl, updateCountSliderEl] = useState(0);
    const handleCountSlider = (val: number) => {
        updateCountSliderEl(val);
    }

    const[valueSliderEl, updateValueSliderEl] = useState(0);
    const handleValueSlider = (val: number) => {
        updateValueSliderEl(val);
    }

   // const router = useRouter();
    const handleRouterClick = () => {
        Router.push({ pathname: '/game', query: {count: sliderData.count[countSliderEl], value: sliderData.value[valueSliderEl], upDown } });
    }

    const sliderData = {
        count: [2, 3, 4, 5],
        value: ['А', '9', '1', '50', '99', '999']
    }
  return (
    <MainPage>
        <Container>
            <Title title='Кол-во предметов' />

            <div className={flexContainer}>
                <Slider elements={sliderData.count} updateEl={handleCountSlider} currentEl={countSliderEl} />
            </div>

            <Title title='Значения' />

            <div className={flexContainer}>
                <Slider elements={sliderData.value} updateEl={handleValueSlider} currentEl={valueSliderEl} />
            </div>

            <div className={css`display: flex; justify-content: space-evenly; margin: 5rem 0;`}>
                <Button btnText='По возрастанию' btnType='up' active={upDown} method={handleActiveBtn} />
                <Button btnText='По убыванию' btnType='down' active={upDown} method={handleActiveBtn} />
            </div>

            <div className={flexContainer}>
                <Button btnText='Играть' btnType='play' method={handleRouterClick} />
            </div>
        </Container>
    </MainPage>
  );
}

export default Index