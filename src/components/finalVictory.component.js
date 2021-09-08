import React from 'react'

import victory from '../imgs/victory.jpg'

import {
    Container
} from 'reactstrap';

const FinalVictory = () => {
    return (
        <Container id="finalVictory">
            <img src={victory} alt="You win!!" />
        </Container>
    )
}

export default FinalVictory
