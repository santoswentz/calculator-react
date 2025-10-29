import { Container, Content, Row } from './styles';
import { useState } from 'react';
import Button from './components/button';
import Input from './components/input';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => (prev === '0' ? number : `${prev}${number}`));
  };

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation(null);
  };

  const handleOperation = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(op);
    } else {
      handleEqual();
      setOperation(op);
    }
  };

  const handleEqual = () => {
    if (firstNumber === '0' || operation === null) return;

    const num1 = Number(firstNumber);
    const num2 = Number(currentNumber);
    let result = 0;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Erro';
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber('0');
    setOperation(null);
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} /> 

        <Row>
          <Button label="X" onClick={() => handleOperation('*')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="C" onClick={handleClear} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="=" onClick={handleEqual} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
