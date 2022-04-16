import css from 'styled-jsx/css'
import { colors } from '../../../styles/theme'

export default css`
    .portfolio{
        position: relative;
        margin-top: 2rem;
    }

    .portfolio__title{
        position: relative;
        height: 5.5rem;
        overflow-x: hidden;
        background-color: #19191ab0;
        -webkit-backdrop-filter: saturate(180%) blur(2px);
        backdrop-filter: saturate(180%) blur(2px); 
    }
    
    .portfolio__title h2{
        position: absolute;
        left: -30%;
        line-height: 1rem;
        color: ${colors.white};
        font-weight: 400;
        white-space: nowrap;
    }
    .portfolio__title h2:nth-child(1){
        top:0;
        color: ${colors.primary};
    }
    .portfolio__title h2:nth-child(2){
        bottom:0;
    }
    
`