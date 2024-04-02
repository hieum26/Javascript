const coursesAPI = 'http://localhost:3000/courses'
const methods = {
    "POST": (data) => {
        return {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data),
        }
    },
    "PUT": (data) => {
        return {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data),
        }
    },
    "DELETE": () => {
        return {
            method: 'DELETE',
        }
    },
}

export {
    coursesAPI,
    methods,
}