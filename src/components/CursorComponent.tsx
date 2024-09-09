import { useEffect, useRef, useState } from 'react';

interface IPosition {
  x: number;
  y: number;
}

export default function CursorComponent() {
  const [mousePosition, setMousePosition] = useState<IPosition>({ x: 0, y: 0 });
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const mouseMoveHandler = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (divRef.current) {
        setWidth(divRef.current.clientWidth);
        setHeight(divRef.current.clientHeight);
      }
    };
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    setPosition({
      x: +((mousePosition.x / width) * 100).toFixed(2),
      y: +((mousePosition.y / height) * 100).toFixed(2),
    });
  }, [mousePosition, width, height]);

  return (
    <div ref={divRef} className='relative border w-full h-[100dvh] bg-red-300 box-border'>
      <div
        className='w-[100px] h-[100px] bg-blue-300 absolute'
        style={{
          top: `${position.y}%`,
          left: `${position.x}%`,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </div>
  );
}
