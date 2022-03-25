const CatsInfo = ({ info, imgUrl }) => {
  return (
    <div className="info">
      {imgUrl && <img src={imgUrl} alt="catImg"></img>}
      {info && (
        <div>
          <div className="description">
            <h4>Description:</h4>
            <p>{info.description}</p>
          </div>
          <div className="temperament">
            <h4>Temperament: </h4>
            <p>{info.temperament}</p>
          </div>
          <div className="additional">
            <h4>Additional info: </h4>
            <p>
              <small>
                Provided information in the table bellow represent level on
                scale from 1 to 5.
              </small>
            </p>
            <table>
              <thead>
                <tr>
                  <th>intelligence </th>
                  <td>{info.intelligence}</td>
                </tr>
                <tr>
                  <th>adaptability</th>
                  <td>{info.adaptability}</td>
                </tr>
                <tr>
                  <th>energy level</th>
                  <td>{info.energy_level}</td>
                </tr>
                <tr>
                  <th>child friendly</th>
                  <td>{info.child_friendly}</td>
                </tr>
                <tr>
                  <th>dog friendly</th>
                  <td>{info.dog_friendly}</td>
                </tr>
                <tr>
                  <th>affection level</th>
                  <td>{info.affection_level}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatsInfo;
