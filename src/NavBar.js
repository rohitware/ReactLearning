import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <ul>
                    <li>
                        <Link to="/">FunctionComponent</Link>
                    </li>
                    <li>
                        <Link to="/class-component">ClassComponent</Link>
                    </li>
                    <li>
                        <Link to="/calculator">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/math">Math</Link>
                    </li>

                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/header">Header</Link>
                    </li>

                    <li>
                        <Link to="/body1">Body1</Link>
                    </li>
                    <li>
                        <Link to="/body2">Body2</Link>
                    </li>
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                    <li>
                        <Link to="footer"> Footer</Link>
                    </li>
                    <li>
                        <Link to="child">Child</Link>
                    </li>
                    <li>
                        <Link to="state">State</Link>
                    </li>
                    <li>
                        <Link to="favcol">Color Change</Link>
                    </li>
                    <li>
                        <Link to="list">List</Link>
                    </li>
                    <li>
                        <Link to="hook">hook</Link>
                    </li>


                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default NavBar;