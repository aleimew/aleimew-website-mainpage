import React from 'react';
import helphim from '../Assets/helphim.png';
import {
    PageContainer,
    LeftSide,
    RightSide,
    Titles,
    MyName,
    Headliners,
    Quotes,
} from './pageElements';

const Home = () => {
    return (
        <PageContainer>
            <LeftSide>
                <Titles>
                    <MyName>Alex Moore</MyName>
                    <Headliners>Pursuing programming, video editing/film making, <br />
                        game development, help.</Headliners>
                    <Quotes>"I put my hopes and dreams into this site, You <br />
                        can tell because I made it myself" - Me
                    </Quotes>
                </Titles>
            </LeftSide>

            <RightSide>
                <h1>Website under construction</h1>
                <img src={helphim} alt="helphim" />
            </RightSide>
        </PageContainer>
    );
}

export default Home;