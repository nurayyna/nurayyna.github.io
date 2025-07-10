import { NavLink } from 'react-router-dom';
import classes from '../style/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
        <div className="container">
            <div className={classes.navbarBrand}>
                <img src="/images/cropped-cropped-logo-light-1-296x83.png" alt="Logo" height="40" />
            </div>
            <ul className={classes.navbarNav}>
                <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    `${classes.navLink} ${isActive ? classes.active : ''}`
                    }
                >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                    `${classes.navLink} ${isActive ? classes.active : ''}`
                    }
                >
                    Services
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                    `${classes.navLink} ${isActive ? classes.active : ''}`
                    }
                >
                    Products
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/trainings"
                    className={({ isActive }) =>
                    `${classes.navLink} ${isActive ? classes.active : ''}`
                    }
                >
                    Trainings
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                    `${classes.navLink} ${isActive ? classes.active : ''}`
                    }
                >
                    Contact
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/action"
                    className={({ isActive }) =>
                    `${classes.navLink} ${classes.actionLink} ${isActive ? classes.active : ''}`
                    }
                >
                    Take Action
                </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
}