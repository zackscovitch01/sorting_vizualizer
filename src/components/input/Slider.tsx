import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "@/lib/utils";

export const Slider = ({
  min = MIN_ANIMATION_SPEED,
  max = MAX_ANIMATION_SPEED,
  step = 10,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="text-center font-light">Slow</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-300"
      />
      <span className="text-center font-light">Fast</span>
    </div>
  );
};
