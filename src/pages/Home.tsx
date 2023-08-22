import NewsletterSub from "../components/newsletter_sub_form/NewsletterSub";
import GoogleMapComponent from "../components/google_map/GoogleMap";

import styles from "../styles/home.module.scss";
import CarsSlider from "../components/slider/CarsSlider";
import RentForm from "../components/forms/rent_form/RentForm";



const Home = () => {
  return(
    <div>
      <div className={styles.firstSection}>
        <div className={styles.container}>
          <p className={styles.title}>Rent a car easily</p>
          <p className={styles.title2}>Try It!</p>
          <RentForm />
        </div>
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