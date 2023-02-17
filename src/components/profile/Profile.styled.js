import styled from "styled-components";

export const ProfileCard = styled.section`
    width: 300px;
    height: 100%;
    background-color: #c9c9ff; 
    border-radius: 15px; 
`;

export const UserDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-right: auto;
    margin-bottom: 8px;
    svg {
        margin-right: 5px;
        width: 18px;
        height: 18px;
    }
`

export const DescriptionText = styled.p`
    font-size: 25px;
`

export const Avatar = styled.img`
    padding: 10px;
    width: 270px;
    border: 2px solid #ffbdbd;
    border-radius: 150px;  
    background-color: #ffffff;
`;

export const UserName = styled.p`
    font-size: 40px;
    margin-bottom: 15px;
`;



export const Statistics = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

export const StatisticsItems = styled.li`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    font-size: 20px;
`;

export const Quantity = styled.span`
    font-size: 18px;
`;


