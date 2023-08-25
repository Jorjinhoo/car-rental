import { AiOutlineFileAdd } from "react-icons/ai";
import { useState, useEffect, ChangeEvent } from "react";
import { useTranslation } from 'react-i18next';

import styles from "../../../styles/fileInput.module.scss";

const FileInput = () => {

  const { t } = useTranslation();

  const [selectedFileName, setSelectedFileName] = useState(
    localStorage.getItem("selectedFileName") || ""
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const fileName = file.name;
      setSelectedFileName(fileName);
      localStorage.setItem("selectedFileName", fileName); 
    } else {
      setSelectedFileName("");
      localStorage.removeItem("selectedFileName"); 
    }
  };

  useEffect(() => {
    const storedFileName = localStorage.getItem("selectedFileName");
    if (storedFileName) {
      setSelectedFileName(storedFileName);
    }
  }, []);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="file">
        {selectedFileName ? (
          <div className={styles.selectedFileName}>
            <div className={styles.addedText}>{t("Added driver's license")}</div>
            {t('Uploaded file: ')}{selectedFileName}
          </div>
        ) : (
          <>
            <AiOutlineFileAdd className={styles.img} />
            {t('Upload your driver licence')}
            <div className={styles.extraText}>{t('select or drag a file')}</div>
          </>
        )}
      </label>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .pdf"
        id="file"
        className={styles.input}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;