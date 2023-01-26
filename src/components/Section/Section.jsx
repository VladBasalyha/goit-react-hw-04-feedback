import css from '../Section/Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <section className={css.feedbackSection}>
      <p>{title}</p>
      {children}
    </section>
  );
};
