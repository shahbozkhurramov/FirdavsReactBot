import React from "react";
import { CourseModel } from '../Models/CourseModel';
import img from '../Images/arabic.jpg';

export default function Course({course}: {course: CourseModel}) {
  return (
    <div className="course">
      <img src={require('../Images/arabic.jpg')} alt="Course 1" className="course-image" />
      <div className="course-info">
        <h2 className="course-title">{course.name}</h2>
        <p className="course-description">{course.description}</p>
      </div>
    </div>
  );
}
