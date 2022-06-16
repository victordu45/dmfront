import axios from "axios";

export async function getStaticPaths() {
  const { data } = await axios.get(
    `http://ergast.com/api/f1/2020/results/1.json`
  );
  return {
    paths: data.MRData.RaceTable.Races.map(({ round }) => `/races/${round}`),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { round } = params;
  const { data } = await axios.get(
    `http://ergast.com/api/f1/2020/${round}/results.json`
  );

  return {
    props: {
      race: data.MRData.RaceTable.Races
    }
  };
}

export default function Race({ race }) {
  return (
    <div className="body">
      {race.map(({ raceName, Circuit, time, date, Results }) => (
        <div>
          <div className="raceTitle">{raceName}</div>
          <div className="container_race_details">
            <div className="left">
              <div className="container_race_details">
                <div className="left">
                  <div className="titreSection">Informations</div>
                  <div className="information_item">Pays : {Circuit.Location.country}</div>
                  <div className="information_item">Ville : {Circuit.Location.locality}</div>
                  <div className="information_item">Date : {date} </div>
                  <div className="information_item">Heure : {time} </div>
                </div>
                <div className="black_line"></div>
                <div className="right">
                  <div className="titreSection">Classement</div>
                  {Results.map(({ Driver, position, Constructor }) => (
                    <div className="drivers">
                      <div className="number_driver">
                        <div className="number">{position}</div>
                        <div className="driver">{Driver.givenName}{Driver.familyName}</div>
                      </div>
                      <div className="team">
                        <img
                          className="image_brand"
                          src={`/brand/${Constructor.constructorId}.png`}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="black_line"></div>
            <div className="right">
              <img
                className="test"
                src={`/track_map/${raceName.replaceAll(" ", "_")}.png`}
                alt=""
              />
            </div>
          </div>

        </div>
      ))}
    </div>
    
  );
}
