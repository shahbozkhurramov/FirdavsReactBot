import React from "react";
import { CourseModel } from "../Models/CourseModel";
import Course from "./Course";

export default function CourseList({courses}: {courses: CourseModel[]}) {
  return (
      <div className="course-list">
        {
          courses.map(course => {
            return <Course key={course.id} course={course}/>
          })
        }
      </div>
  );
}