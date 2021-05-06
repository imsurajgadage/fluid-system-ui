import React from 'react'
import styles from './Main.module.css'

const Main = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.sub_container}>
                <img src='./images/1.png' alt="Logo" className={styles.image}/>
            </div>

            <div className={styles.sub_container}>
                <p className={styles.bold_content}>
                    C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                </p>
                <ul>
                    <li>
                        <p>
                            C.R.I's energy efficient products are well recognized by various
                            government institutions, as trust worthy products for various projects 
                            across the globe to save energy
                        </p>
                    </li>
                    <li>
                        <p>
                            C.R.I is thr highest contributor in the country for the products of
                            EESL (Energy Efficient Services Limited) to teplace the old 
                            inefficient pumps with 5 star rated energy efficeint smart pumps
                            with IoT enabled control panel
                        </p>
                    </li>

                </ul>
                   <img src='./images/2.png' alt="Logo" className={styles.image1}/>
                   <p>
                       Government of India has awarded the <span className={styles.bold_text}>
                           "National Energy Conservation Award 2018"
                       </span>
                       Mr.G.Selvaraj, Joint Managing Director of C.R.I Group received the award from
                       smt. Sumitra Mahajan, Speaker of Lok Sabha & Shree. Raj Kumar Singh Honorable
                       Minister of state.
                   </p>
            </div> 
        </div>
        <div>
            <div className={styles.details_section}>
                <p className={styles.details}>
                        INSTALLED OVER 10 LAKHS STAR RATED PUMPSET ACROSS THE COUNTRY
                        RESULTING IN A CUMULATIVE SAVINGS OF A MORE THAN 9,000 MILLION UNITS
                        OF POWER FOR THE NATION
                </p>
            </div>

            <div className={styles.image_div}>
                <img src='./images/3.png' className={styles.image_feature} alt="Features"/>
            </div>
            <p className={styles.features}>
                Values - Pumps - Pipes - IoT Drivers & Controllers - Wire & Cable - Solar System - Motors
            </p>    
            <hr/>
            <p className={styles.info}>
                C.R.I. FLUID SYSTEMS PRODUCTS CATERS TO DIVERSE SEGMENTS
            </p>
            <div className={styles.details_div}>
                <p className={styles.details}> 
                    CHEMICALS & PROCESS | POWER | WATER & WASTE WATER OIL & GAS | PHARMA
                    | SUGER & DISTILLERIES PAPER & PULP | MARIEN & DEFENCE | METAL & MINING |
                    FOOD & BEVERAGE | PETROCHEMICALS & REFINERIES | SOLAR | BUILDING | HVAC |
                    FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
                </p>
            </div>
        
        </div>
        </>
    )
}

export default Main
