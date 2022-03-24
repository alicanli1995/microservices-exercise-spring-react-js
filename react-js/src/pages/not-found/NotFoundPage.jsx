import {Link} from "react-router-dom";

const NotFoundPage  = () => {

    return(
        <div className="container">
            <div className="row">
                <div style={{marginTop:"15rem"}} className="col-md-12 text-center">
                    <span className="display-1">
                        404
                    </span>
                    <div className="mb-4 lead">
                        Oops! We can't seem to find the page are looking for.
                    </div>
                    <Link to="/home" className="btn btn-link">
                            Back Home
                    </Link>
                </div>
            </div>
        </div>
    )

};

export {NotFoundPage};