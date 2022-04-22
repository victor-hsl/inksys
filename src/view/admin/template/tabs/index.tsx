import {Link} from 'react-router-dom'

type Props = {
    title1: string;
    title2: string;
    link1: string;
    link2: string;
    active: number;
}

const Tabs = ({title1, link1, title2, link2, active} : Props) => {
    return(
        <ul className="nav nav-tabs mt-3 container">
            <li className="nav-item">
                <Link className={`nav-link ${active===0 ? 'active' : ''}`} to={link1}>{title1}</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${active===1 ? 'active' : ''}`} to={link2}>{title2}</Link>
            </li>
        </ul>
    );
};
export default Tabs;