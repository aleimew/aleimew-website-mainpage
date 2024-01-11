import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LeftSide = styled.div`
    top: -12rem;
    right: 13rem;
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
`;

export const MainTitle = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: -2.5rem;
`;

export const Headliners = styled.h2`
    font-size: 2rem;
    font-weight: 350;
    margin-bottom: -2rem;
`;

export const Quotes = styled.h3`
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 100;
    `;