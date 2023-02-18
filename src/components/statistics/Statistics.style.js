import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StatisticsTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 35px;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
  padding: 5px;
  width: 100px;
  border-radius: 7px;
`;

export const StatLabel = styled.span`
  margin-bottom: 5px;
  font-size: 25px;
`;

export const StatQuantity = styled.span`
  font-size: 25px;
`;
