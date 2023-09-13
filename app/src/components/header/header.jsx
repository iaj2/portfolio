import { Link } from 'react-router-dom'
import { ReactComponent as AdminIcon } from '../../assets/icons/admin.svg'
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="text-back-drop">
                <p>Isaac James</p>
            </div>
            <Link className='adminLink' to="/admin">
                <AdminIcon />
            </Link>
            
        </div>
    )
}

export default Header