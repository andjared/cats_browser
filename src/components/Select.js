const Select = ({ list, handleClick }) => {
  return (
    <div className="select">
      <label htmlFor="list">Search by cats breed: </label>
      <div className="custom-select">
        <select
          name="cats_list"
          id="list"
          onClick={(e) => handleClick(e.target.value)}
        >
          <option></option>

          {list &&
            list.map((breed) => {
              return (
                <option value={breed.name} key={breed.id}>
                  {breed.name}
                </option>
              );
            })}
        </select>
        <span className="custom-arrow"></span>
      </div>
    </div>
  );
};

export default Select;
