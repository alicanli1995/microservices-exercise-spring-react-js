import {useEffect, useState} from "react";
import User from "../../models/user";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import AuthenticationService from "../../service/authentication.service";
import "./RegisterPage.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

const RegisterPage  = () => {

        const [user , setUser ] = useState(new User("","",""));
        const [loading , setLoading] = useState(false);
        const [submitted, setSubmitted] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");

        const currentUser = useSelector(state => state.user);

        const navigate = useNavigate();

        useEffect(() => {
                if(currentUser?.id){
                        navigate("/profile");
                }
        }, []);

        const handleChange = (e) => {
                const {name, value } = e.target;
                setUser((prevState => {
                        return{
                                ...prevState,
                        [name]: value
                        }
                }))
        }

        const handleRegister = (e) => {
                e.preventDefault();

                setSubmitted(true);
                if(!user.username || !user.password || !user.name){
                        return;
                }
                setLoading(true);
                AuthenticationService.register(user).then(_ => {
                        navigate('/login');
                }).catch(error => {
                        console.log(error);
                        if(error?.response?.status === 409 ){
                                setErrorMessage("username or password is not valid");
                        }
                        else{
                                setErrorMessage("Unexpected error occurred");
                        }
                        setLoading(false);
                })

        }


        return(
                <div className="container mt-5">
                        <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
                                <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon" />
                                {errorMessage &&
                                <div className="alert alert-danger">
                                        {errorMessage}
                                </div>
                                }
                                <form onSubmit={ (e) => handleRegister(e)}
                                noValidate
                                className={submitted?"was-validated":""}>
                                        <div className="form-group">
                                                <label htmlFor="name">Full Name: </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="name"
                                                    value={user.name}
                                                    onChange={(e) => handleChange(e) }
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                        Full name is required.
                                                </div>
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="name">User Name: </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="username"
                                                    placeholder="username"
                                                    value={user.username}
                                                    onChange={(e) => handleChange(e) }
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                        User name is required.
                                                </div>
                                        </div>
                                        <div className="form-group">
                                                <label htmlFor="password">Password: </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    placeholder="password"
                                                    value={user.password}
                                                    onChange={(e) => handleChange(e) }
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                        Password is required.
                                                </div>
                                        </div>
                                        <button className="btn btn-info w-100 mt-3"
                                        disabled={loading}>
                                                Sign Up
                                        </button>
                                </form>
                                <Link to={"/login"} className="btn btn-link" style={{color:"darkgray"}}>
                                        I have an Account!
                                </Link>
                        </div>
                </div>
        )

};

export {RegisterPage};