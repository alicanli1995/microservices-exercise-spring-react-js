import {useEffect, useRef, useState} from "react";
import CourserService from "../../service/courser.service";
import {CourseSave} from "../../component/CourseSave";
import Course from "../../models/course";
import {CourseDelete} from "../../component/CourseDelete";



const AdminPage  = () => {

        const [course, setCourses] = useState([]);
        const [selectedCourse, setSelectedCourse] = useState(new Course("","",0));
        const [errorMessage, setErrorMessage] = useState("");

        const deleteComponent = useRef();


        useEffect(() => {
                CourserService.getAllCourses().then((response) => {
                        setCourses(response.data);
                })
        }, []);

        const saveComponent = useRef();

        const createRequest = () => {
                setSelectedCourse(new Course("","",0));
                saveComponent.current?.showCourseModal();
        }

        const editCourseRequest = (item) => {
                setSelectedCourse(Object.assign({},item));
                saveComponent.current?.showCourseModal();
        }

        const saveCourseWatcher = (courseNew) => {
                let itemIndex = course.findIndex(item => item.id===courseNew.id);
                if(itemIndex !== -1 ){
                        const newList = course.map( (item) => {
                                if(item.id === courseNew.id)
                                {
                                        return courseNew;
                                }
                        return item;
                        });
                        setCourses(newList);
                }else{
                        const newList = course.concat(courseNew);
                        setCourses(newList);
                }
        }

        const deleteCourse = () => {
                CourserService.deleteCourse(selectedCourse).then(_ => {
                        setCourses(course.filter( x => x.id !== selectedCourse.id));
                }).catch(error => {
                        setErrorMessage("Unexpected error occurred");
                        console.log(error);
                });

        }

        const deleteCourseRequest = (courseDelete) =>{
                setSelectedCourse(courseDelete);
                deleteComponent.current?.showDeleteModal();
        }

        return(
        <div>
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
                                                                <h3>All Courses</h3>
                                                        </div>
                                                        <div className="col-6 text-end">
                                                                <button className="btn btn-primary"
                                                                onClick={() => createRequest()}>
                                                                        Create Course
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
                                                                <th scope="col">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {course.map((item,ind) =>
                                                        <tr key={item.id}>
                                                                <th scope="row">{ind + 1}</th>
                                                                <td>{item.title}</td>
                                                                <td>{`$ ${item.price}`}</td>
                                                                <td>{new Date(item.createTime).toLocaleTimeString()}</td>
                                                                <td>
                                                                        <button className="btn btn-primary me-1"
                                                                                onClick={() => editCourseRequest(item)}
                                                                        >
                                                                                Edit
                                                                        </button>
                                                                        <button className="btn btn-danger"
                                                                        onClick={() => deleteCourseRequest(item)}>
                                                                                Delete
                                                                        </button>
                                                                </td>
                                                        </tr>
                                                        )}
                                                        </tbody>

                                                </table>
                                        </div>
                                </div>
                        </div>
                </div>

                <CourseSave ref={saveComponent} course={selectedCourse} onSaved={(p) => saveCourseWatcher(p)}/>
                <CourseDelete ref ={deleteComponent} onConfirmed ={() => deleteCourse()} />
        </div>

        )

};

export {AdminPage};