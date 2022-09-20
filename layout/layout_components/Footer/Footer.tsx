import styles from "./Footer.module.css";
import {FooterProps} from "./Footer.props";

const Footer = ({children, ...props}: FooterProps): JSX.Element => {
    return (
        <div {...props}>
            Footer
        </div>
    );

};

export default Footer;