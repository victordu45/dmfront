import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion"

export async function getStaticProps() {
  const { data } = await axios.get("http://ergast.com/api/f1/2020/results/1.json");

  return {
    props: {
      races: data.MRData.RaceTable.Races
    }
  };
}

export default function Home({ races }) {
  return (
    <div className="body">
      <div className="titre">L&apos;année 2020 en Formule 1</div>
      <div className="textPres">
        Ce site a pour but de présenter la saison 2020 de Formule 1. Vous retrouverez sur cette page la liste des courses de l&apos;année. En cliquant sur un circuit vous accèderez aux détails de la course. Vous trouverez alors, le lieu où s&apos;est déroulée la course (pays, ville), la date et l&apos;heure de la course, le tracé et le classement des pilotes avec leur écurie respective.
      </div>
      <div className="container">
        {races.map(({ raceName, round, Circuit }) => (
          <Link href={`/races/${round}`}>
            <motion.div
              className="cards"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <img
                className="img"
                src={`./track_map/${raceName.replaceAll(" ", "_")}.png`}
                alt=""
              />
              <div className="cardTitle">{raceName}</div>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="footer">
        <div className="footerLink">
          <motion.div
            whileHover={{ scale: 1.25 }}
          >
            <Link href={`mentionslegales.md`}>
              <a>Mentions légales</a>
            </Link>
          </motion.div>
        </div>
        <div className="footerLink">
          <motion.div
            whileHover={{ scale: 1.25 }}
          >
            <Link href={`contact`}>
              <a>Contact</a>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
