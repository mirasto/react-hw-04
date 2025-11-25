const Statistic = ({
  goodCount,
  neutralCount,
  badCount,
  countTotalFeedBack,
  positivePercentage,
}) => {
  return (
    <>
      <p className="text-[20px] p-2 text-center font-bold">Good:{goodCount}</p>
      <p className="text-[20px] p-2 text-center font-bold">Neutral: {neutralCount} </p>
      <p className="text-[20px] p-2 text-center font-bold">Bad:{badCount}</p>
      <p className="text-[20px] p-2 text-center font-bold">Total: {countTotalFeedBack()}</p>
      <p className="text-[20px] p-2 text-center font-bold">
        Positive Feedback: {positivePercentage()}%
      </p>
    </>
  );
};
export default Statistic;
