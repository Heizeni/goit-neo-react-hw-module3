import css from './Contact.module.css';

export default function Contact({ data, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.text}>{data.name}</p>
        <p className={css.text}>{data.number}</p>
      </div>

      <button className={css.button} onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </div>
  );
}