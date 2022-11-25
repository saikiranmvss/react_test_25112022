import './Login.css';
import { Link } from "react-router-dom";
const Login = () => {
    return (

        <div className="logining">
                    <div className="d-flex align-items-center" style={{width: "100%", height: "100vh" }}>
        <div className="form-box">
        <div className="container login-form">
            <div className="row">
                <div className="col-12 form-fields title-text" ><span>LOGIN FORM</span></div>
                <div className="col-12 form-fields"><input className="form-control" ng-model="email" placeholder="Email address" type="text" name="email" id="email" /></div>
                <div className="col-12 form-fields"><input className="form-control" ng-model="password" type="password" placeholder="Password" name="password" id="password" /></div>
                <div className="col-12 form-fields"><Link to="/Settings"><input style={{background:"rgb(5 19 6)"}} type="button" className="btn btn-primary" value="Login" id="login" name="login" /></Link></div>                              
            </div>
        </div>
    </div>
    </div>
        </div>
        
    )
}

export default Login;