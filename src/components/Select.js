const Select = ({ list, handleClick }) => {
  return (
    <div className="select">
      <label htmlFor="list">Search by cats breed: </label>
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
    </div>
  );
};

export default Select;