import { useState } from 'react';
import Options from './Options/Options';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';

const Feedback = () => {
  const [goodCount, setCountGood] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleGoodCount = () => {
    setCountGood(prev => prev + 1);
  };
  const handleNeutralCount = () => {
    setNeutralCount(prev => prev + 1);
  };
  const handleBadCount = () => {
    setBadCount(prev => prev + 1);
  };

  const countTotalFeedBack = () => {
    return goodCount + neutralCount + badCount;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedBack();

    return total ? Math.round((goodCount / total) * 100) : 0;
  };

  return (
    <>
      <Section title="Please Leave Feedback">
        <Options
          onGoodClick={handleGoodCount}
          onNeutralClick={handleNeutralCount}
          onBadClick={handleBadCount}
        />
      </Section>
      <Section title="Statistic">
        <Statistic
          goodCount={goodCount}
          neutralCount={neutralCount}
          badCount={badCount}
          countTotalFeedBack={countTotalFeedBack}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
};

export default Feedback;
