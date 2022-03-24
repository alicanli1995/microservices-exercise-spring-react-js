import {Link} from "react-router-dom";

const UnAuthorizedPage  = () => {

        return(
            <div className="container">
                    <div className="row">
                            <div style={{marginTop:"15rem"}} className="col-md-12 text-center">
                    <span className="display-1">
                        401
                    </span>
                                    <div className="mb-4 lead">
                                            Oops! Access to this resource is denied.
                                    </div>
                                    <Link to="/home" className="btn btn-link">
                                            Back Home
                                    </Link>
                            </div>
                    </div>
            </div>
        )

};

export {UnAuthorizedPage};