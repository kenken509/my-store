import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../../context/user.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="auth">
            SIGN IN
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
