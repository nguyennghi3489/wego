import { FC, FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./search-box.module.css";

interface Props {
  name?: string;
  placeholder: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

export const SearchBox: FC<Props> = ({
  name = "search-input",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <AiOutlineSearch size={20} />
      <input
        className={styles.searchInput}
        placeholder={placeholder}
        name={name}
        value={value}
        aria-label={name}
        onChange={onChange}
      />
    </div>
  );
};
