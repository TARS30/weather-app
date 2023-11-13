import styled from "styled-components";

const StyledInput = styled.input`
    border: none;
    color: inherit;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    font-family: inherit;
    padding: 1.6rem 3.2rem;
    text-transform: capitalize;
    background-color: #949c9647;
    transition: all 0.2s ease 0s;
  
  &:focus {
    scale: 1.2;
    background-color: #ffffff92;
    outline: 2px solid #ffffff3b;
    transition: all 0.2s ease 0s;
  }
`;

const Input = (props) => {
  const inputChangeHandler = (e) => {
    props.onSetLocation(e.target.value);
  };
  return (
    <div>
      <StyledInput
        type="text"
        value={props.location}
        onChange={inputChangeHandler}
        placeholder="Search from location..."
      />
    </div>
  );
};

export default Input;
