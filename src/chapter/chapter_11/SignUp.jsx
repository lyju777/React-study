import React,{useState} from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGendedr = (event) => {
    setGender(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome, ${name} ${gender}` );
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>

      <label>
        gender:
        <select value={gender} onChange={handleChangeGendedr} >
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;