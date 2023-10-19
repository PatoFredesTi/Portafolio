import React, {useState} from 'react';
import styles from './BB8Toggle.module.css';

const BB8Toggle = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggleChange = () => {
        setIsChecked(!isChecked);
        //Agregar logica
    }

    return (
        <label className={styles.bb8Toggle}>
            <input className={styles.bb8Toggle__checkbox} type='checkbox' checked={isChecked} onChange={handleToggleChange} />
            <div className={styles.bb8Toggle__container}>
                <div className={styles.bb8Toggle__scenery}>
                    <div className={styles.bb8Toggle__star}></div>
                    <div className={styles.bb8Toggle__star}></div>
                    <div className={styles.bb8Toggle__star}></div>
                    <div className={styles.bb8Toggle__star}></div>
                    <div className={styles.bb8Toggle__star}></div>
                    <div className={styles.bb8Toggle__star}></div>
                    <div className={styles.bb8Toggle__star}></div>
                    <div className={styles.tatto_1}></div>
                    <div className={styles.tatto_2}></div>
                    <div className={styles.gomrassen}></div>
                    <div className={styles.hermes}></div>
                    <div className={styles.chenini}></div>
                    <div className={styles.bb8Toggle__cloud}></div>
                    <div className={styles.bb8Toggle__cloud}></div>
                    <div className={styles.bb8Toggle__cloud}></div>
                </div>
                <div className={styles.bb8}>
                    <div className={styles.bb8__headContainer}>
                        <div className={styles.bb8__antena}></div>
                        <div className={styles.bb8__antena}></div>
                        <div className={styles.bb8__head}></div>
                    </div>
                    <div className={styles.bb8__body}></div>
                </div>
                <div className={styles.artificial__hidden}>
                    <div className={styles.bb8__shadow}></div>
                </div>
            </div>
        </label>
    )
};

export default BB8Toggle;

    
