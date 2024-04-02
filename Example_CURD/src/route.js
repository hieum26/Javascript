import { coursesAPI, methods } from '../env.js'
const getCourses = (render) => {
    fetch(coursesAPI)
        .then(response => response.json())
        .then(render)
}
const createCourse = (new_course) => {
    fetch(coursesAPI, methods.POST(new_course))
        .then(response => response.json())
        .then(alert('Course created successfully'))
}
const updateCourse = (course_id, new_course) => {
    fetch(`${coursesAPI}/${course_id}`, methods.PUT(new_course))
        .then(response => response.json())
        .then(alert('Course updated successfully'))
}
const deleteCourse = (course_id) => {
    fetch(`${coursesAPI}/${course_id}`, methods.DELETE())
        .then(response => response.json())
        .then(() => {
            let course = document.getElementById(`course_${course_id}`)
            course ? course.remove() : Promise.reject('Khong co khoa hoc nay')
        })
        .catch(error => console.log(error))
}

export {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse,
}