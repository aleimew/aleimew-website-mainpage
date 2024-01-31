import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        background-color: darkblue;
        color: white;
    }
`;

export const Page = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const PageContainerMobile = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    min-width: 100px;
    min-width: 100px;
    max-width: window.innerWidth - 100px;
    max-height: window.innerHeight - 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    `;

export const ImageMobile = styled.img`
    min-width: 100px;
    min-width: 100px;
    max-width: 300px;
    max-height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
`;

export const LeftSide = styled.div`
    top: 0 12rem;
    right: 0 5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #000;
`;

export const RightSide = styled.div`
    position: relative;
`;

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 20rem;
`;

export const TitlesMobile = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const MainTitle = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: -2.5rem;
`;

export const MainTitleCentered = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: -2.5rem;
    text-align: center;
`;

export const MainTitleMobile = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: -1.5rem;
`;

export const Headliners = styled.h2`
    font-size: 2rem;
    font-weight: 350;
    margin-bottom: -2rem;
`;

export const HeadlinersMobile = styled.h2`
    font-size: 1.5rem;
    font-weight: 350;
    margin-bottom: -1rem;
`;

export const Quotes = styled.h3`
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 100;
`;

export const QuotesMobile = styled.h3`
    font-size: 1rem;
    font-style: italic;
    font-weight: 100;
`;

export const Passage = styled.p`
    font-size: 1.5rem;
    margin-left: 10 %;
    margin-right: 10 %;
    text-align: center;
    padding: 0 10%;
    margin-top: 2.5rem;
`;

export const Video = styled.iframe`
    min-width: 640px;
    min-height: 360px;
    max-width: 3840px;
    max-height: 2160px;

    display: block;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
`;

export const VideoMobile = styled.iframe`
    min-width: 320px;
    min-height: 180px;
    max-width: 3840px;
    max-height: 2160px;

    display: block;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
`;

export const BoldText = styled.p`
    text-weight: 700;
`;