import styled from 'styled-components'
import { font } from './SSOT.style';

export const HighScoreDiv = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: ${font};
    margin: 0;
    padding: 0.5em;
    background-color: lightgray;
    text-align: center;

    &:nth-of-type(odd) {
        background-color: white;
    }
`;

export const Name = styled.span`
    display: flex;
    justify-content: flex-start;
    width: 33.3%;
`;

export const TotalScore = styled.span`
    display: flex;
    justify-content: center;
`;

export const ScoreDate = styled.span`
    display: flex;
    justify-content: flex-end;
    width: 33.3%;
`;