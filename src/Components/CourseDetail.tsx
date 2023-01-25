import React from 'react'
import { useParams } from "react-router-dom";
import { CourseModel } from '../Models/CourseModel';
const courses: CourseModel[] = [
  {
    id: 1,
    name: "Arab tili",
    description: "Arab tilini 8 oy davomida biz bilan birga o'rganing...",
    img: '../Images/arabic.jpg',
    delayTime: 1000
  },
  {
    id: 2,
    name: "Ingliz tili",
    description: "Something....",
    img: '../Images/arabic.jpg',
    delayTime: 2000
  },
  {
    id: 3,
    name: "Kimyo",
    description: "Kimyo bilan tanishing",
    img: '../Images/arabic.jpg',
    delayTime: 2500
  },
  {
    id: 4,
    name: "Matematika",
    description: "Matematika bilan tanishing",
    img: '../Images/arabic.jpg',
    delayTime: 3000
  }
  ]

export default function CourseDetail() {
    let { id } = useParams<{ id: string }>();
    const course = courses.find(course => course.id === Number(id));
    return (
    <div data-aos="flip-right" data-aos-duration="1500">
      <h1>{course?.name}</h1>
      <p>Course ID: {course?.id}</p>
    </div>
  );
}
