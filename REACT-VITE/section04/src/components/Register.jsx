import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    comment: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };

  // const onChangeComment = (e) => {
  //   setInput({
  //     ...input,
  //     comment: e.target.value,
  //   });
  // };

  return (
    <div>
      <input
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
    </div>
  );
};

export default Register;
