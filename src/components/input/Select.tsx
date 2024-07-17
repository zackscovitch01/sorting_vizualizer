import { SelectOptionsType } from "@/lib/types";

export const Select = ({
  options,
  defaultValue,
  onChange,
  isDisabled = false,
}: {
  options: SelectOptionsType[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
}) => {
  return (
    <div className="inline-block relative w-48">
      <select
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={isDisabled}
        className="block appearance-none h-8 w-full bg-slae-100 border-system-purple20 border px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7z" />
        </svg>
      </div>
    </div>
  );
};
