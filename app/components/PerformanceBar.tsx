type PerformanceBarProps = {
  performance: number;
};

const PerformanceBar = ({ performance }: PerformanceBarProps) => {
  return (
    <div className="relative w-full h-2 bg-gray-600 rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-[#FFCE31] rounded-full"
        style={{ width: `${performance}%` }}
      ></div>
    </div>
  );
};

export default PerformanceBar;
