import styled from '@emotion/styled'
import {css} from '@emotion/css'
import { useState } from 'react'
import style from '../style/style.module.css';

const Text = css`
    font-family: Calibri;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: center;
    color: #4F4B61;
`
const Circle = css`
    height: 23px;
    width: 23px;
    border-radius: 50%;
    background-color: #FFD748;
`
const selectedCircle = css`
    height: 23px;
    width: 23px;
    border-radius: 50%;
    background-color: #104987;
`

interface SliderStepProps {
    label: string | number,
    updateEl: (val: number) => void,
    index: number,
    selected: boolean
}

const SliderStep: React.FC<SliderStepProps> = ({label,updateEl, index, selected}) => {
    
    return(
        <div className={style.step}>
            <div className={Text}>{label}</div>
            <div className={style.circleWrapper} onClick={() => updateEl(index)}>
                <div className={selected ? selectedCircle : Circle}></div>
            </div>
        </div>
    ) 
}

export default SliderStep;