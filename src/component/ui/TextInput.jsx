import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) =>
    props.height &&
    `height: ${props.height}px;
  `}
  padding:16px;
  font-size: 16px;
  line-height: 20px;
`;

function TextInput(props) {
  const { value, onChange, height } = props;

  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      height={height}
    />
  );
}

export default TextInput;