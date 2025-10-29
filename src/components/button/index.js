import { } from './styles';
import { ButtonContainer } from './styles';

const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <button>{label}</button>
    </ButtonContainer>
  );
};

export default Button;
