const Input = (props) => {
  const inputChangeHandler = (e) => {
    props.onSetLocation(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search from location..."
        value={props.location}
        // onChange={props.onChangeLocation}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default Input;
