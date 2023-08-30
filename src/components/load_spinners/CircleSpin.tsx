import { CircleLoader } from "react-spinners";

import spinStyle from "../../styles/spinner.module.scss";

const CircleSpin = () => {
  return (
    <div className={spinStyle.container}>
      <CircleLoader color="#00FF00" size={50} className={spinStyle.spinner} />
    </div>
  );
}

export default CircleSpin;