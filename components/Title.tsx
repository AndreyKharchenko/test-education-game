import styled from '@emotion/styled'

const StyledTitle = styled.div`
    font-family: Helvetica;
    font-size: 32px;
    font-weight: bold;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: center;
    color: #423F45;
`

const StyledWinTitle = styled.div`
    font-family: Helvetica;
    font-size: 98px;
    font-weight: 400;
    line-height: 163px;
    letter-spacing: 0px;
    text-align: center;
    color: #FFE44F;

`

const StyledUpDownTitle = styled.div`
    font-family: Helvetica;
    font-size: 50px;
    font-weight: 400;
    line-height: 163px;
    letter-spacing: 0px;
    text-align: center;
    color: #FFF;

`

interface TitleProps {
    title: string,
    titleType?: string
}

const Title: React.FC<TitleProps> = ({title, titleType}) => {
    return(
        <>
            {
                (titleType == 'win')
                ?
                    <StyledWinTitle>{title}</StyledWinTitle>
                :
                (titleType == 'upDown')
                ?
                    <StyledUpDownTitle>{title}</StyledUpDownTitle>
                :
                    <StyledTitle>{title}</StyledTitle>
            }
        </>
    ) 
}

export default Title;