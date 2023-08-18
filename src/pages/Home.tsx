import NewsletterSub from "../components/newsletter_sub_form/NewsletterSub";
import GoogleMapComponent from "../components/google_map/GoogleMap";

import styles from "../styles/home.module.scss";
import CarsSlider from "../components/slider/CarsSlider";



const Home = () => {
  return(
    <div>
      <div className={styles.firstSection}>
        <div className={styles.container}></div>
      </div>
      <CarsSlider />
        <GoogleMapComponent />
      <div className={styles.thirdSection}>
        <NewsletterSub />
      </div>
    </div>
  )
}

export default Home;