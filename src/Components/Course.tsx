import React from "react";
import { Link } from "react-router-dom";
import { CourseModel } from '../Models/CourseModel';

export default function Course({course}: {course: CourseModel}) {
  return (
    <div className="course">
      <img src={require('../Images/arabic.jpg')} alt="Course 1" className="course-image" />
      <div className="course-info">
        <h3 className="course-title">{course.name}</h3>
        <div className="course-description">{course.description}</div>
        <Link to={`/courseDetail/${course.id}`} className="course-info-button">Batafsil</Link>
      </div>
    </div>
  );
}
