import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin-top: -30px;
`;

export const AreaMes = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  color: #ccc;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const MonthAnalyzer = styled.div`
  flex: 2;
`;
