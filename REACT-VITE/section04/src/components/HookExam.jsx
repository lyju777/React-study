import useInput from "./hooks/UseInput";

const HookExam = () => {
  const [input, onChnge] = useInput();

  return (
    <div>
      <input value={input} onChange={onChnge} type="text" />
    </div>
  );
};

export default HookExam;
