
import GoogleMapComponent from "../components/google_map/GoogleMap";


import styles from "../styles/home.module.scss";



const Home = () => {
  return(
    <div>
      <div className={styles.firstSection}>
      </div>
      <GoogleMapComponent />
    </div>
  )
}

export default Home;