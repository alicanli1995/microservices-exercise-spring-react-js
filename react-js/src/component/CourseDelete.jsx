import {forwardRef, useImperativeHandle, useState} from "react";
import {Modal} from "react-bootstrap";

const CourseDelete = forwardRef((props, ref ) =>{

    const [show , setShow] = useState(false);

    useImperativeHandle(ref , () => ({
        showDeleteModal (){
            setShow(true);

        }
    }))
    const deleteCourse = () =>{
        props.onConfirmed();
        setShow(false);
    }


    return(
        <Modal show={show}>
            <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button name="button" className="btn-close" onClick={() => setShow(false)}/>
            </div>
            <div className="modal-body">
                Are you sure to delete the selected course ?
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                    Cancel
                </button>
                <button type="button"  onClick={() => deleteCourse()}  className="btn btn-danger">
                    I'm sure!
                </button>
            </div>

        </Modal>
    )

})

export {CourseDelete};