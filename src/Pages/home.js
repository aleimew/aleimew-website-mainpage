import React from 'react';
import helphim from '../Assets/helphim.png';
import Navbar from '../Components/Navbar';
import TextReader from '../Components/TextReader';
import {
    Page,
    PageContainer,
    PageContainerMobile,
    Image,
    ImageMobile,
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
    Passage,
} from '../Components/PageElements';

// import raw data here. Note file had to be moved from the public folder
// to somewhere under src so it can be accessed on the server side
import testDataRaw from '../TextFiles/test.txt';

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
                        {/* <TextReader text={"https://localhost:3000/test.txt"} /> this is referencing
                        a file as if from the client. note the protocol is different from the default for 
                        the app (https vs http) so wouldn't work anyway. the file could be fetched like this, 
                        but that would happen in the client browser, not on the server which is what
                        you said you were trying to do.*/}
                        <TextReader textFile={testDataRaw} />
                    </LeftSide>

                    <RightSide>
                        <Navbar />
                        <Passage>This section is where all my latest entries <br />
                            will be added. To be implimented at a later date.</Passage>
                        <Image src={helphim} alt="helphim" />
                    </RightSide>
                </PageContainer>
            ) :
                <PageContainerMobile>
                    {PrintNameAndQuotes(mobile)}
                    <Navbar mobile={props.mobile} />
                    <Passage>This section is where all my latest entries
                        will be added. To be implimented at a later date.</Passage>
                    <ImageMobile src={helphim} alt="helphim" />
                </PageContainerMobile>
            }
        </Page>
    );
}

export default Home;