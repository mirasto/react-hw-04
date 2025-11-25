const Statistic = ({
  goodCount,
  neutralCount,
  badCount,
  countTotalFeedBack,
  positivePercentage,
}) => {
  return (
    <div className="text-lg p-4 text-center font-medium space-y-1.5 bg-white-100 mt-5 rounded-lg shadow-sm">
      <p>Good: {goodCount}</p>
      <p>Neutral: {neutralCount}</p>
      <p>Bad: {badCount}</p>
      <p>Total: {countTotalFeedBack()}</p>
      <p>Positive Feedback: {positivePercentage()}%</p>
    </div>
  );
};

export default Statistic;
