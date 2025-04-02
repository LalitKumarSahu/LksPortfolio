const IntroPage = () => {
  // We still need keyframes CSS since Tailwind doesn't handle animations like this
  const keyframesStyles = `
    @keyframes load1 {
      0% { bottom: 0; height: 0; }
      6.944444444% { bottom: 0; height: 100%; }
      50% { top: 0; height: 100%; }
      59.944444433% { top: 0; height: 0; }
    }
    @keyframes load2 {
      0% { top: 0; height: 0; }
      6.944444444% { top: 0; height: 100%; }
      50% { bottom: 0; height: 100%; }
      59.944444433% { bottom: 0; height: 0; }
    }
    @keyframes load3 {
      0% { top: 0; height: 0; }
      6.944444444% { top: 0; height: 100%; }
      50% { bottom: 0; height: 100%; }
      59.94444443% { bottom: 0; height: 0; }
    }
    @keyframes load4 {
      0% { top: 0; height: 0; }
      6.944444444% { top: 0; height: 100%; }
      50% { bottom: 0; height: 100%; }
      59.94444443% { bottom: 0; height: 0; }
    }
    @keyframes load5 {
      0% { bottom: 0; height: 0; }
      6.944444444% { bottom: 0; height: 100%; }
      50% { top: 0; height: 100%; }
      59.94444443% { top: 0; height: 0; }
    }
    @keyframes load6 {
      0% { bottom: 0; height: 0; }
      6.944444444% { bottom: 0; height: 100%; }
      50% { top: 0; height: 100%; }
      59.94444443% { top: 0; height: 0; }
    }

    .anim-h1 {
      left: 0;
      animation: load1 7.2s ease infinite;
    }
    .anim-h2 {
      right: 0;
      animation: load2 7.2s ease 0.6s infinite;
    }
    .anim-h3 {
      right: 0;
      animation: load3 7.2s ease 1.2s infinite;
    }
    .anim-h4 {
      right: 0;
      animation: load4 7.2s ease 1.8s infinite;
    }
    .anim-h5 {
      left: 0;
      animation: load5 7.2s ease 2.4s infinite;
    }
    .anim-h6 {
      left: 0;
      animation: load6 7.2s ease 3s infinite;
    }
  `;

  return (
    <div className="h-screen flex justify-center items-center">
      <style>{keyframesStyles}</style>

      {/* Hexagon container */}
      <div className="relative w-[90px] h-[51px]">
        {/* Character in the center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-[#64ffda] z-50">
          c
        </div>

        {/* First hexagon side */}
        <div className="absolute w-full h-full">
          <div className="relative w-full h-full">
            <span className="absolute w-1 h-0 bg-[#64ffda] z-40 anim-h1"></span>
            <span className="absolute w-1 h-0 bg-[#64ffda] z-40 anim-h2"></span>
          </div>
        </div>

        {/* Second hexagon side (rotated 60 degrees) */}
        <div
          className="absolute w-full h-full"
          style={{ transform: "rotate(60deg)" }}
        >
          <div className="relative w-full h-full">
            <span className="absolute w-1 h-0 bg-[#64ffda] z-40 anim-h5"></span>
            <span className="absolute w-1 h-0 bg-[#64ffda] z-40 anim-h4"></span>
          </div>
        </div>

        {/* Third hexagon side (rotated -60 degrees) */}
        <div
          className="absolute w-full h-full"
          style={{ transform: "rotate(-60deg)" }}
        >
          <div className="relative w-full h-full">
            <span className="absolute w-1 h-0 bg-[#64ffda] z-40 anim-h6"></span>
            <span className="absolute w-1 h-0 bg-[#64ffda] z-40 anim-h3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
