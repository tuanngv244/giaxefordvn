import { Option } from "@/types/general";
import {
  ChangeEvent,
  FC,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

type SelectProps = {
  options: Option[];
  defaultValue?: Option;
  onSelectData: (data?: Option) => void;
};

export const Select: FC<SelectProps> = ({
  options,
  onSelectData,
  defaultValue,
}) => {
  const [data, setData] = useState<Option | undefined>(options[0]);
  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option = options.find((option) => option.value == value);
    setData(option);
    onSelectData(option);
  };

  useEffect(() => {
    if (defaultValue) {
      setData(defaultValue);
    }
  }, [defaultValue]);

  return (
    <select
      className="w-full h-[4rem] rounded-4 border border-solid border-lightGray outline-none cursor-pointer "
      onChange={onSelect}
      name="select"
      id="select"
    >
      <option value={data?.value}>{data?.label}</option>
      {options.map((option, idx) => {
        return (
          <option className="py-[0.4rem]" key={idx} value={option?.value}>
            {option?.label}
          </option>
        );
      })}
    </select>
  );
};
