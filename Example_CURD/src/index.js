import { getCourses, createCourse, updateCourse, deleteCourse } from './route.js'

const render = (courses) => {
    let block_courses = document.querySelector('#list-courses')
    block_courses.innerHTML = courses.reduce((html, course) => {
        return html.concat(`
            <li id="course_${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button class="delete-btn" course-id="${course.id}">Delete</button>
                <button class="update-btn" course-id="${course.id}" course-name="${course.name}" course-description="${course.description}">Update</button>
            </li>
        `)
    }, '')
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            let courseId = this.getAttribute('course-id');
            deleteCourse(courseId);
        });
    });
    document.querySelectorAll('.update-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            let courseId = this.getAttribute('course-id');
            let courseName = this.getAttribute('course-name');
            let courseDescription = this.getAttribute('course-description');
            handle.Update(courseId, courseName, courseDescription);
        });
    });
}

let handle = {
    createBtn: document.querySelector('#create'),
    updateBtn: document.querySelector('#update'),
    cancelBtn: document.querySelector('#cancel'),
    nameInput: document.querySelector('input[name="name"]'),
    descInput: document.querySelector('input[name="description"]'),
    default(flag = 1){
        this.createBtn.style.display = flag ? 'inline' : 'none' 
        this.updateBtn.style.display = flag ? 'none' : 'inline'
        this.cancelBtn.style.display = flag ? 'none' : 'inline'
    },
    Create() {
        this.createBtn.onclick = () => {
            let new_course = {
                name: this.nameInput.value,
                description: this.descInput.value,
            }
            createCourse(new_course)
        }
    },
    Update(course_id, course_name, course_description) {
        this.nameInput.value = course_name 
        this.descInput.value = course_description 
        this.default(0)
        this.updateBtn.onclick = () => {
            let new_course = {
                name: this.nameInput.value,
                description: this.descInput.value,
            }
            updateCourse(course_id, new_course)
        }
        this.cancelBtn.onclick = () => {
            this.default()
            this.nameInput.value = ''
            this.descInput.value = ''
        }
    },
    PreStart() {
        this.Create()
        this.default()
    },
}


let start = () => {
    handle.PreStart()
    getCourses(render)
}

start()


