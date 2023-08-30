import { MoonLoader } from "react-spinners";

import spinStyle from "../../styles/spinner.module.scss";

const MoonSpin = () => {
  return (
    <div className={spinStyle.container}>
      <MoonLoader color="#00FF00" size={50} className={spinStyle.spinner} />
    </div>
  );
}

export default MoonSpin;