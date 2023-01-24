import React from "react";
import { Link } from "react-router-dom";
import { CourseModel } from '../Models/CourseModel';

export default function Course({course}: {course: CourseModel}) {
  const delayTime: number = 1000;
  return (
    <div className="course" data-aos="fade-up" data-aos-duration={(delayTime-200*course.id)*course.id}>
      <img src={require('../Images/arabic.jpg')} alt="Course 1" className="course-image" />
      <div className="course-info">
        <h3 className="course-title" data-aos="fade-right" data-aos-duration={(delayTime-200*course.id)*course.id}>{course.name}</h3>
        <div className="course-description" data-aos="fade-left" data-aos-duration={(delayTime-200*course.id)*course.id}>{course.description}</div>
        <Link to={`/firdavsreactbot/courseDetail/${course.id}`} className="course-info-button">Batafsil</Link>
      </div>
    </div>
  );
}
