import * as React from 'react';

import Spinner from "../svg/spinner.svg";
import { LoadingContainer, LoadingTitle, LoadingSpinner } from './styles/Loading.style';

const Loading = (props) => {
    return (
        <LoadingContainer>
            <LoadingTitle>Loading...</LoadingTitle>
            <LoadingSpinner src={Spinner} alt="Spinner Bicycle Wheel" />
        </LoadingContainer>
    )
}

export default Loading;