import {useEffect, useState} from "react";
import PurchaseService from "../../service/purchase.service";
import {useDispatch, useSelector} from "react-redux";
import {Role} from "../../models/role";
import UserService from "../../service/user.service";
import {clearCurrentUser} from "../../store/action/user";
import {useNavigate} from "react-router-dom";

const ProfilePage  = () => {

    const [purchaseList , setPurchaseList] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const currentUser = useSelector( state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        PurchaseService.getAllPurchases().then((response) =>{
            setPurchaseList(response.data);
        })
    }, []);


    const changeRole = () =>{
        const newRole = currentUser.role === Role.ADMIN ? Role.USER : Role.ADMIN;

        UserService.changeRole(newRole).then( () => {
            dispatch(clearCurrentUser());
            navigate("/login");
        }).catch(error => {
            setErrorMessage("Unexpected error ! ");
            console.log(error);
        })
    }


    return(
        <div className="container">
            <div className="pt-5">
                {errorMessage &&
                    <div className="alert alert-danger">
                        {errorMessage}
                    </div>
                }
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-6">
                                <h3>All Purchased Items</h3>
                            </div>
                            <div className="col-6 text-end">
                                Current role is <strong>{currentUser?.role}</strong>
                                <button onClick={() => changeRole()} className="btn btn-primary">
                                    Change Role
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {purchaseList.map((item,ind) =>
                                    <tr key={item.id}>
                                        <th scope="row">{ind + 1 }</th>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>{(item.purchaseTime)}</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

};

export {ProfilePage};