import React from 'react';
import DefaultLayout from './layouts/default.jsx';
import Header from './layouts/header.jsx';
import Foot from './layouts/footer.jsx';
import ErrDiv from './layouts/ErrDiv.jsx';
class Login extends React.Component {
    render() {
        return (
            <DefaultLayout title="Login" csslinks={this.props.links}>
              {this.props.error ? <ErrDiv message={this.props.msg} msghead={this.props.head}/> : null}
                <Header/>
                <div style={{
                    width: '100%',
                    paddingTop: '1em',
                    paddingBottom: '1em'
                }}>
                    <div className="updateContainer"></div>
                    <div className="wrapper">
                        <div className="imgform" id="lodiv">
                            <div className="lobdy">
                            <form className="" action="/" method="post" id="loginform">
                                <table><tbody>
                                        <tr>
                                            <td>
                                                <p className="lotop">C<span className="small">entral</span>
                                                    I<span className="small">nformation</span>
                                                    S<span className="small">ystem</span>
                                                </p>
                                                <p className="lobot">Login</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="uname" id="uname">
                                                    <img src="./images/People.png" id="idimage" alt="Notfound"/>
                                                    <input type="text" name="uname" value="" id="user" placeholder="ID"/></div>
                                                <div className="pname" id="pname">
                                                    <img src="./images/pass.png" id="passimage" alt="Notfound"/>
                                                    <input type="text" name="pass" id="passwd" value="" placeholder="Password" autoComplete="off"/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="javascript:FormSubmit();" className="button">Login</a>&nbsp;
                                                <a href="javascript: toogle()" className="button">Register</a>
                                            </td>
                                        </tr></tbody>
                                </table>
                                </form>
                            </div>
                        </div>
                        <div className="regblock" id="regdiv">
                            <form method="post" id="regform" action="register">

                                <table>
                                    <tbody>
                                        <tr style={{
                                            paddingTop: '0.5em'
                                        }}>
                                            <td>
                                                <div className="registertext">CIS Register</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label className="reglabel" htmlFor="uid">Unique ID:</label>
                                            </td>
                                            <td>
                                                <div className="reg">
                                                    <input type="text" name="uid" id="uid" placeholder="UID" className="regtext"/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="reglabel" htmlFor="fname">First Name:
                                                </label>
                                            </td>
                                            <td>
                                                <div className="reg">
                                                    <input type="text" name="fname" id="fname" placeholder="First Name" className="regtext"/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="reglabel" htmlFor="lname">Last Name:</label>
                                            </td>
                                            <td>
                                                <div className="reg"><input type="text" placeholder="Last Name" className="regtext" id="lname" name="lname"/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="reglabel" htmlFor="email">Email:</label>
                                            </td>
                                            <td>
                                                <div className="reg"><input type="text" placeholder="E-Mail" className="regtext" name="email" id="email"/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="reglabel" htmlFor="password">Password:</label>
                                            </td>
                                            <td>
                                                <div className="reg"><input type="password" placeholder="Password" className="regtext" name="password" id="password"/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="reglabel" htmlFor="dob">Date of Birth:</label>
                                            </td>
                                            <td>
                                                <div className="reg"><input type="date" name="dob" id="dob" className="regtext" placeholder="Date of Birth"/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="javascript: toogle()" className="button">Login</a>
                                            </td>
                                            <td>
                                                <a href="javascript: register()" className="button">Register</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <Foot/>
            </DefaultLayout>

        );
    }
}

export default Login;
