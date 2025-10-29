import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px; 
  height: 81px;
  width: 100%; 
  background-color: #7f7f7fff;

  button {
    height: 40px;
    width: 100%;
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;