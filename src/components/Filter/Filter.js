import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contact
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
