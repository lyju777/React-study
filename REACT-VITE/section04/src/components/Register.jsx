import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    comment: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = () => {
    if (input.name === "") {
      alert("이름을 입력해주세요.");
      inputRef.current.focus();
      return;
    }
  };

  return (
    <div>
      <button onClick={onChange}>버튼</button>

      <input
        ref={inputRef}
        name="name"
        onChange={onChange}
        value={input.name}
        placeholder={"이름"}
        type="text"
      />
      <div>
        <input
          name="brith"
          onChange={onChange}
          value={input.birth}
          type="date"
        />
      </div>

      <div>
        <select onChange={onChange} value={input.country} name="country" id="">
          <option></option>
          <option>한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="comment" value={input.comment} onChange={onChange} />
      </div>
      <button onClick={onsubmit}>제출</button>
    </div>
  );
};

export default Register;
