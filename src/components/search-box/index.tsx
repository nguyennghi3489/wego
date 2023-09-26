import { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./search-box.module.css";

interface Props {
  name?: string;
  placeholder: string;
  defaultValue: string;
  onChange: (input: string) => void;
}

export const SearchBox: FC<Props> = ({
  name = "search-input",
  placeholder,
  defaultValue,
  onChange,
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <AiOutlineSearch size={25} />
      <input
        className={styles.searchInput}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        aria-label={name}
        onChange={handleChange}
      />
    </div>
  );
};
