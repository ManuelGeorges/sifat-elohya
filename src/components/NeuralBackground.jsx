import { useMemo } from 'react';
import './NeuralBackground.css';

function NeuralBackground() {
  const lines = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100
    }));
  }, []);

  return (
    <div className="neural-background">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <g className="lines">
          {lines.map(({ id, x1, y1, x2, y2 }) => (
            <line
              key={id}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(173, 216, 230, 0.2)"
              strokeWidth="0.3"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default NeuralBackground;
