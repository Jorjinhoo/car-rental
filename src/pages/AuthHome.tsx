
import RentForm from "../components/forms/rent_form/RentForm";
import useAuth from "../hooks/use-auth";

import { VscAccount } from "react-icons/vsc";

import styles from "../styles/authHome.module.scss";
import LastOrderCard from "../components/car_cards/LastOrderCard";
import FileInput from "../components/forms/inputs/FileInput";

const AuthHome = () => {

  const user = useAuth();

  return(
    <div className={styles.container}>
      <section className={styles.firstSection}>
        <RentForm />
      </section>
      <section className={styles.secondSection}>
        <div className={styles.firstContainer}>
          <div className={styles.accDataContainer}>
            <VscAccount className={styles.accLogo} />
            <div className={styles.accData}>
              <div className={styles.item}>{user.userDetails.displayName}</div>
              <div className={styles.item}>{user.userDetails.email}</div>
            </div>
          </div>
          <div className={styles.someInfContainer}>
            <FileInput />
          </div>
        </div>
        <div className={styles.lasOrdContainer}>
          <LastOrderCard />
        </div>
      </section>
    </div>
  )
}

export default AuthHome;