import styled from '@emotion/styled'
import { useState } from 'react'
import SliderStep from './SliderStep'


const StyledSlider = styled.div`
    display: flex;
    margin-bottom: 1rem;
`

interface SliderProps {
    elements: (string | number)[],
    updateEl: (val: number) => void,
    currentEl: number
}

const Slider: React.FC<SliderProps> = ({elements, updateEl, currentEl}) => {
    return(
        <StyledSlider>
            {
                elements.map((el, index) => {
                    return(
                        <SliderStep 
                            key={index} 
                            index={index} 
                            label={el} 
                            updateEl={updateEl}
                            selected={currentEl == index} 
                        />
                    )
                })
            }
        </StyledSlider>
    ) 
}

export default Slider;