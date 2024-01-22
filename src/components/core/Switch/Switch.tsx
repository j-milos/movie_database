import s from "./Switch.module.scss";
import clsx from "clsx";

type SwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export const Switch: React.FC<SwitchProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className={s.switch}>
        <input
          type="checkbox"
          checked={value}
          onChange={(event) => {
            onChange(event.target.checked);
          }}
        />
        <span className={clsx(s.slider, s.round)}></span>
      </label>
    </div>
  );
};
