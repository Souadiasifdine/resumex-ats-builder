const ScoreRing = ({ score, size = 96, stroke = 9, label = true }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(Math.max(score, 0), 100) / 100);
  const color = score >= 80 ? "#0e7c57" : score >= 50 ? "#2f55d4" : "#d9822b";

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} role="img" aria-label={`Readiness score ${score} out of 100`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e3e6ee" strokeWidth={stroke} />
        <circle
          className="score-ring"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ "--ring-full": circumference, transition: "stroke-dashoffset .3s ease, stroke .3s ease" }}
        />
      </svg>
      {label && (
        <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
          <strong className="text-2xl font-extrabold tracking-tight text-foreground" style={{ fontSize: size * 0.3 }}>{score}</strong>
          <span className="mt-0.5 text-[10px] font-semibold text-muted-foreground">of 100</span>
        </div>
      )}
    </div>
  );
};

export default ScoreRing;
