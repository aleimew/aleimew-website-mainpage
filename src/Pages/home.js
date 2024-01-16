import React from 'react';
import helphim from '../Assets/helphim.png';
import Navbar from '../Components/Navbar';
import {
    Page,
    PageContainer,
    PageContainerMobile,
    Image,
    LeftSide,
    RightSide,
    Titles,
    TitlesMobile,
    MainTitle,
    MainTitleMobile,
    Headliners,
    HeadlinersMobile,
    Quotes,
    QuotesMobile,
} from '../Components/PageElements';

const PrintNameAndQuotes = (mobile) => {
    return (
        <Page>
            {!mobile ? (
                <Titles>
                    <MainTitle>Alex Moore</MainTitle>
                    <Headliners>Pursuing eveything at once. </Headliners>
                    <Headliners>Help.</Headliners>
                    <Quotes>"I put my hopes and dreams into this site. You <br />
                        can tell because I made it myself" - Me
                    </Quotes>
                </Titles>
            ) :
                (
                    <TitlesMobile>
                        <MainTitleMobile>Alex Moore</MainTitleMobile>
                        <HeadlinersMobile>Pursuing eveything at once. </HeadlinersMobile>
                        <HeadlinersMobile>Help.</HeadlinersMobile>
                        <QuotesMobile>"I put my hopes and dreams into this site. You
                            can tell because I made it myself" - Me
                        </QuotesMobile>
                    </TitlesMobile>
                )}
        </Page>
    );
}

const Home = (props) => {
    const mobile = props.mobile;
    return (
        <Page>
            {!props.mobile ? (
                <PageContainer>
                    <LeftSide>
                        {PrintNameAndQuotes()};
                    </LeftSide>

                    <RightSide>
                        <Navbar />
                        <h1>This section is where all my latest entries
                            will be added. To be implimented at a later date.</h1>
                        <Image src={helphim} alt="helphim" />
                    </RightSide>
                </PageContainer>
            ) :
                <PageContainerMobile>
                    {PrintNameAndQuotes(mobile)}
                    <Navbar mobile={props.mobile} />
                    <br />
                    <h1>This section is where all my latest entries
                        will be added. To be implimented at a later date.</h1>
                    <img src={helphim} alt="helphim" />
                </PageContainerMobile>
            }
        </Page>
    );
}

export default Home;