const Input = (props) => {
  const inputChangeHandler = (e) => {
    props.onSetLocation(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={props.location}
        onChange={inputChangeHandler}
        placeholder="Search from location..."
      />
    </div>
  );
};

export default Input;
