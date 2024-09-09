import { useId, useState } from 'react';
import './App.css';
import CursorComponent from './components/CursorComponent';

function App() {
  const [count, setCount] = useState(0);
  const inputId = useId();

  const [inputValue, setInputValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const resetInputText = (): void => {
    setInputValue('');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const ErrorMessage = '에러가 발생했습니다.';
  return (
    <>
      {/* <div className='mb-[30px]'>
        <Label htmlFor={`username${inputId}`}>Username</Label>
        <DefaultTextField
          iconPath={
            'https://image.similarpng.com/very-thumbnail/2020/11/Red-incorrect-icon-button-on-transparent-background-PNG-1.png'
          }
          alt={'버튼 이미지'}
          width={10}
          height={10}
          onClick={resetInputText}
          placeholder={'아이디를 입력해주세요'}
          onChange={handleInputChange}
          value={inputValue}
          errorMessage={ErrorMessage}
          isError={isError}
        />
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p> */}
      <CursorComponent />
    </>
  );
}

export default App;
