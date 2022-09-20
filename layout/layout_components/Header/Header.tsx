import styles from "./Header.module.css";
import {HeaderProps} from "./Header.props";

const Header = ({children, ...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    );

};

export default Header;