import styled from "styled-components";

export const Page = styled.div`

    `;

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PageContainerMobile = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    min-width: 100px;
    min-width: 100px;
    max-width: window.innerWidth;
    max-height: window.innerHeight;
    `;

export const LeftSide = styled.div`
    top: -12px;
    left: 13px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #000;
`;

export const RightSide = styled.div`
    position: static;
`;

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
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