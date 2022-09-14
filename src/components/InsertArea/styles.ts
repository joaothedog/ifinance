import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px;

  input {
    margin-right: 15px;
    font-size: 16px;
    padding: 5px;
    border-radius: 3px;
    border: solid 1px;
  }

  select {
    margin-right: 15px;
    font-size: 16px;
    padding: 5px;
    border-radius: 3px;
    border: solid 1px;
  }
`;

export const Inputs = styled.div``;
export const Button = styled.div`
  max-width: 100%;
  margin-left: 20px;

  button {
    display: inline-block;
    width: 150px;
    border: none;
    padding: 10px;
    color: #fff;
    background-color: darkblue;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: blue;
  }
`;
