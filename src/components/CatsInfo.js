const CatsInfo = ({ info, imgUrl }) => {
  return (
    <div className="info-container" key={Math.random()}>
      {imgUrl && <img src={imgUrl} alt="catImg"></img>}
      {info && imgUrl && (
        <div className="info">
          <div>
            <div className="description info-box">
              <h4>Description:</h4>
              <p>{info.description}</p>
            </div>
            <div className="temperament info-box">
              <h4>Temperament: </h4>
              <p>{info.temperament}</p>
            </div>
          </div>
          <div className="additional info-box">
            <h4>Additional info: </h4>
            <p>
              <small>
                Provided information in the table bellow represent level on
                scale from 1 to 5.
              </small>
            </p>
            <div>
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
        </div>
      )}
    </div>
  );
};

export default CatsInfo;
