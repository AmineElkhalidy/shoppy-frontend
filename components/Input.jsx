import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding-block: 15px;
  padding-left: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: black;
  }
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
