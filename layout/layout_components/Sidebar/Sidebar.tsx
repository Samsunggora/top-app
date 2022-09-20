import styles from "./Sidebar.module.css";
import {SidebarProps} from "./Sidebar.props";

const Sidebar = ({children, ...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            SIDEBAR
        </div>
    );

};

export default Sidebar;