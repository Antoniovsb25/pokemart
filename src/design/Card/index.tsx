import styles from './Card.module.css';

interface CardProps {
  className?: string;
  children: React.ReactNode | string;
}

const Card = ({className, children} : CardProps) => {
  return (
    <article
      className={`${styles.card} ${className ? className : ''}`}
    >
      {children}
    </article>
  );
};

export default Card;