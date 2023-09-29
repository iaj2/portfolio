import './footer.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as AdminIcon } from '../../assets/icons/admin.svg'
const Footer = () => {

    return (
        <div className='footer'>
            <p className='footer-text'>Isaac James</p>
            <Link className='adminLink' to="/admin">
                <div className='admin-icon-wrapper'>
                    <AdminIcon />
                </div>
                
                <p>Login</p>
            </Link>
        </div>
    )
}

export default Footer