import {PProps} from "./P.props";
import styles from "../P/P.module.css";

const P = ({size = 'm', children, className, ...props}: PProps): JSX.Element => {
    switch (size) {
        case "s":
            return (<>
                <p className={styles.s14} {...props}>{children}</p>
            </>);
        case "m":
            return (<>
                <p className={styles.s16} {...props}>{children}</p>
            </>);
        case "l":
            return (<>
                <p className={styles.s18} {...props}>{children}</p>
            </>);
        default:
            return (<p className={styles.s14} {...props}>{children}</p>);
    }

}

export default P;