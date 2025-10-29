import { } from './styles';
import { InputContainer } from './styles';

const Input = ({ value }) => {
  return (
      <InputContainer> 
        <input type="text" value={value} disabled /> 
      </InputContainer>
  );
};

export default Input;
