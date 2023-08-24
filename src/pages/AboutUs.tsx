
import GoogleMapComponent from "../components/google_map/GoogleMap";
import NewsletterSub from "../components/newsletter_sub_form/NewsletterSub";

import styles from "../styles/aboutUs.module.scss";


const AboutUs = () => {
   
  return(
    <>
      <div className={styles.headerBcgrnd}></div>
      <div className={styles.container}>
        <div className={styles.title}>About Us</div>
        <section className={styles.section}>
          <span className={styles.textTitle}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/></span> 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.<br/> 
          Many desktop publishing packages and web page <span className={styles.orangeText}>editors now use Lorem</span> Ipsum as their default model text, and a search for 'lorem ipsum'.<br/> 
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br/>
          There are many <span className={styles.orangeText}>variations of passages</span> of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.<br/>
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the <span className={styles.orangeText}>middle of text</span>.<br/>
          <ul className={styles.infoList}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</li>
            <li>Ut dapibus erat a augue pellentesque, in volutpat lorem imperdiet.</li>
            <li>Vivamus fringilla diam egestas tellus pretium, vel commodo ipsum lobortis.</li>
            <li>Pellentesque at felis ut enim lobortis vehicula.</li>
            <li>Etiam cursus mauris vel lorem mattis, id ornare ex venenatis.</li>
          </ul>
        </section>
        <section className={styles.section}>
          <NewsletterSub />
        </section>
        <div className={styles.title}>Our location</div>
      </div>
      <GoogleMapComponent />
      <div className={styles.container}>
        <div className={styles.title}>Contact Us</div>
        <section className={`${styles.section} ${styles.contactSection}`}>
          <ul>
            <li>Tel: <a href="tel:+48575456899">+48 575 456 899</a></li>
            <li>Email: <a href="mailto:SokolovO@gmail.com">SokolovO@gmail.com</a></li>
            <li>Support: <a href="mailto:Sokkollovv@gmail.com">Sokkollovv@gmail.com</a></li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default AboutUs;