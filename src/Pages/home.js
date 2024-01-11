import React from 'react';
import helphim from '../Assets/helphim.png';
import Navbar from '../Components/Navbar';
import {
    PageContainer,
    LeftSide,
    RightSide,
    Titles,
    MainTitle,
    Headliners,
    Quotes,
} from '../Components/PageElements';


const Home = () => {
    return (
        <PageContainer>
            <LeftSide>
                <Titles>
                    <MainTitle>Alex Moore</MainTitle>
                    <Headliners>Pursuing eveything at once. </Headliners>
                    <Headliners>Help.</Headliners>
                    <Quotes>"I put my hopes and dreams into this site. You <br />
                        can tell because I made it myself" - Me
                    </Quotes>
                </Titles>
            </LeftSide>

            <RightSide>
                <Navbar />
                <h1>This section is where all my latestest entries <br />
                    will be added. To be implimented at a later date.</h1>
                <img src={helphim} alt="helphim" />
            </RightSide>
        </PageContainer>
    );
}

export default Home;