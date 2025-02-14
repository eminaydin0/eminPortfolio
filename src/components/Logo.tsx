function Logo() {
  return (
    <div>
      <svg
        version="1.1"
        baseProfile="full"
        width="600"
        height="200"
        viewBox="0 0 600 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4facfe" />
            <stop offset="100%" stop-color="#f093fb" />
          </linearGradient>
        </defs>

        <rect width="600" height="200" fill="#ffffff" />

        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          fill="url(#textGradient)"
          font-family="Arial, sans-serif"
          font-size="64"
          font-weight="700"
          stroke="#000000"
          stroke-width="1"
        >
          EMİN AYDIN
        </text>
      </svg>
    </div>
  );
}

export default Logo;
