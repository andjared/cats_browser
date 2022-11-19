const CatsInfo = ({ info, imgUrl }) => {
  const {
    description,
    temperament,
    intelligence,
    adaptability,
    energy_level,
    child_friendly,
    dog_friendly,
    affection_level,
  } = info;

  return (
    <div className="info-container">
      <img src={imgUrl} alt="catImg" />
      <div className="info">
        <div>
          <div className="description info-box">
            <h4>Description:</h4>
            <p>{description}</p>
          </div>
          <div className="temperament info-box">
            <h4>Temperament: </h4>
            <p>{temperament}</p>
          </div>
        </div>
        <div className="additional info-box">
          <h4>Additional info: </h4>
          <p>
            <small>
              Provided information in the table bellow represent level on scale
              from 1 to 5.
            </small>
          </p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>intelligence </th>
                  <td>{intelligence}</td>
                </tr>
                <tr>
                  <th>adaptability</th>
                  <td>{adaptability}</td>
                </tr>
                <tr>
                  <th>energy level</th>
                  <td>{energy_level}</td>
                </tr>
                <tr>
                  <th>child friendly</th>
                  <td>{child_friendly}</td>
                </tr>
                <tr>
                  <th>dog friendly</th>
                  <td>{dog_friendly}</td>
                </tr>
                <tr>
                  <th>affection level</th>
                  <td>{affection_level}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatsInfo;
