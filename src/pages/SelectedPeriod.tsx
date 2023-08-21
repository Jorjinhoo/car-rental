import { useSelector } from 'react-redux';

import { RootState } from '../store';
import RentForm from '../components/rent_form/RentForm';

import styles from "../styles/selectedPeriod.module.scss";

const SelectedPeriod = () => {

  const selectedPeriod = useSelector((state: RootState) => state.rentFormData.dataToSend);

  console.log(selectedPeriod);
  return(
    <div className={styles.container}>
      <RentForm />
    </div>
  )
}

export default SelectedPeriod;