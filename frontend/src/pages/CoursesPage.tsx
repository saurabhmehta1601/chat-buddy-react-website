import React from 'react'

const courses = [{ id: "1", title: "Git and Github" }, { id: "2", title: "React" }]

const CoursesPage = () => {
    return (
        <>
            <h3 className='text-2xl px-2 py-4 text-center'>Top Courses</h3>
            <div>
                {courses.map(course => (<div key={course.id}>
                    <h4>{course.title}</h4>
                </div>))}
            </div>
        </>
    )
}

export default CoursesPage