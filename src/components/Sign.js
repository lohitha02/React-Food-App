import React from 'react';
import { Link } from 'react-router-dom';

class Sign extends React.Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <Link to = "/login">
                <button type="submit" className="btn">Sign Up</button>
                </Link>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">Login?</a>
                </p>
            </form>
        );
    }
}

export default Sign