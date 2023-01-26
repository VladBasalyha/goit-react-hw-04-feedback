import { Section } from 'components/Section/Section';
import css from '../Statistics/Statistics.module.css';
export const Statistic = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statisticsWrapper}>
      <Section className={css.statisticsParagraph} title={'Feedbacks'}>
        <span>Good: {good}</span>
        <br />
        <span>Neutral: {bad}</span>
        <br />
        <span>Bad: {neutral}</span>
        <span>
          <br />
          Total: {total}
        </span>
        <span>
          <br />
          Positive feedback: {positivePercentage}%
        </span>
      </Section>
    </div>
  );
};
