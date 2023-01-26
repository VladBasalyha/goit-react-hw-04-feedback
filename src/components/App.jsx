import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onFeedback = evt => {
    const { name } = evt.currentTarget;
    if (name === 'good') {
      setGood(good + 1);
      return;
    }
    if (name === 'bad') {
      setBad(bad + 1);
      return;
    }
    if (name === 'neutral') {
      setNeutral(neutral + 1);
      return;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositivePercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };
  const totalFeedbacks = countTotalFeedback();
  return (
    <>
      <FeedbackOptions
        onLeaveFeedback={onFeedback}
        options={['good', 'bad', 'neutral']}
      ></FeedbackOptions>
      {totalFeedbacks ? (
        <Statistic
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback()}
          positivePercentage={countPositivePercentage()}
        ></Statistic>
      ) : (
        <Notification message={'Ooops, no feedback yet'}></Notification>
      )}
    </>
  );
};
