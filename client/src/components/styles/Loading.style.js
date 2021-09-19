import styled from 'styled-components';
import { font } from './SSOT.style';

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoadingTitle = styled.h1`
    font-family: ${font};
    font-size: 2em;
`;

export const LoadingSpinner = styled.img`
    width: 50%;
    animation: spin 10s linear infinite;

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;