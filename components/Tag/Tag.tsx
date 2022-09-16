import {TagProps} from "./Tag.props";
import styles from "../Tag/Tag.module.css";
import cn from "classnames";

const Tag = ({size, children, color = "ghost", href, className, ...props}: TagProps): JSX.Element => {

    return (<div className={cn(styles.tag, className, {
            [styles.s]: size == "s",
            [styles.m]: size == "m",
            [styles.ghost]: color == "ghost",
            [styles.red]: color == "red",
            [styles.primary]: color == "primary",
            [styles.grey]: color == "grey",
            [styles.green]: color == "green",
        })}
                 {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );

}

export default Tag;