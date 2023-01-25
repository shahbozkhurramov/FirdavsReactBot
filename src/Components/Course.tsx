import React from "react";
import { Link } from "react-router-dom";
import { CourseModel } from '../Models/CourseModel';

export default function Course({course}: {course: CourseModel}) {
  return (
    <div className="course" data-aos="fade-up" data-aos-duration={course.delayTime}>
      <img src={require('../Images/arabic.jpg')} alt="Course 1" className="course-image" />
      <div className="course-info">
        <div data-aos="fade-right" data-aos-duration={course.delayTime}>
          <h3 className="course-title">{course.name}</h3>
          <div className="course-description">{course.description}</div>
        </div>
        <Link to={`/firdavsreactbot/courseDetail/${course.id}`} className="course-info-button">Batafsil</Link>
      </div>
    </div>
  );
}
