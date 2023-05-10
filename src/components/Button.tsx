import { SaveButtonProps, RegulerButtonProps } from "../utils/types/components";
import styles from "../styles/Button.module.css";
import { useDispatch } from "react-redux";
import { nilaiAction } from "../redux/reducers/nilai";
import { AppDispatch } from "../redux/store";

export const SaveButton: React.FC<SaveButtonProps> = ({ initial, onBody, onAction }) => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const handleSave = () => {
    // const body = onBody
    dispatch(nilaiAction.simpan(onBody));
  };
  return (
    <>
      <button
        className={styles[`${onAction ? "save-button" : "disable-save-button"}`]}
        // onClick={onSetBody}
        onClick={handleSave}
        disabled={!onAction}
      >
        {initial}
      </button>
    </>
  );
};

export const RegulerButton: React.FC<RegulerButtonProps> = ({
  initial,
  onClick,
  onStyle,
}) => {
  return (
    <>
      <button className={styles[`${onStyle}`]} onClick={onClick}>
        {initial}
      </button>
    </>
  );
};
