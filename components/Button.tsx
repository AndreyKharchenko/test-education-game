import styled from '@emotion/styled'
import {css} from '@emotion/css'
// Up or Down Buttons
const StyledUpDownButton = styled.button`
    height: 45px;
    width: 234px;
    border-radius: 20px;
    background-color: #FFD748;
    border: none;
    cursor: pointer;
`

// start or Finish Buttons
const StyledStartFinishButton = styled.button`
    height: 68px;
    width: 263px;
    border-radius: 20px;
    background-color: #2BD600;
    border: none;
    cursor: pointer;
`

const StyledUpDownText = styled.span`
    font-family: Calibri;
    font-size: 26px;
    font-weight: 700;
    line-height: 39px;
    letter-spacing: 0px;
    text-align: left;
`

const StyledStartFinishText = styled.span`
    font-family: Helvetica;
    font-size: 32px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFF;
`

const activeBtn = css`
    opacity:50%;
`

interface ButtonProps {
    btnText: string;
    btnType: string;
    method?: (() => void) | ((val: string) => void); 
    active?: string
}

const Button: React.FC<ButtonProps> = ({btnText, btnType, method, active}) => {
    return(
        <div>
            {
                (btnType == 'up' || btnType == 'down')
                ?
                <StyledUpDownButton className={active != btnType ? activeBtn : null} onClick={() => method(btnType)}>
                    <StyledUpDownText>{btnText}</StyledUpDownText>
                </StyledUpDownButton>
                :
                <StyledStartFinishButton onClick={() => method()}>
                    <StyledStartFinishText>{btnText}</StyledStartFinishText>
                </StyledStartFinishButton>
            }
        </div>
    ) 
}

export default Button;