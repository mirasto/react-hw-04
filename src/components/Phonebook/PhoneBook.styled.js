import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 80px auto 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background-color: tomato;
  border-radius: 12px;
`;

export const StyledTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: left;
`;

export const StyledInput = styled.input`
  padding: 12px 15px;
  margin-bottom: 20px;
  font-size: 18px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const StyledButton = styled.button`
  padding: 12px;
  font-size: 18px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledLiItem = styled.li`
  font-size: 18px;
  list-style: circle;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: #fff;
`;

export const StyledButtonDelete = styled.button`
  margin-left: 15px;
  font-size: 16px;
  padding: 5px 12px;
  border: none;
  border-radius: 6px;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #a71d2a;
  }
`;
