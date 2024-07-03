import styles from './UnderConstruction.module.css';
import { IoConstructOutline } from "react-icons/io5";

const UnderConstruction = (): React.JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <IoConstructOutline className={styles.icon} />
                <h1 className={styles.text}>Under Construction</h1>
            </div>
        </div>
    );
}

export default UnderConstruction;