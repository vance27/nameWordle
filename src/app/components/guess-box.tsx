export interface GuessBoxProps {
  isActive: boolean;
}
export const GuessBox = (props: GuessBoxProps) => {
  return (
    <div
      style={{ outline: props.isActive ? "1px solid red" : "1px solid gray" }}
    >
      <div>GuessBox</div>
    </div>
  );
};
