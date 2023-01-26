import React from 'react'
import { useParams } from "react-router-dom";
import { CourseModel } from '../Models/CourseModel';
const courses: CourseModel[] = [
  {
    id: 1,
    name: "Arab tili",
    description: "Arab tilini 8 oy davomida biz bilan birga o'rganing...",
    image: require('../Images/arabic.avif'),
    delayTime: 1000
  },
  {
    id: 2,
    name: "Ingliz tili",
    description: "Something....",
    image: require('../Images/english.avif'),
    delayTime: 1350
  },
  {
    id: 3,
    name: "Kimyo",
    description: "Kimyo bilan tanishing",
    image: require('../Images/chemistry.avif'),
    delayTime: 1700
  },
  {
    id: 4,
    name: "Matematika",
    description: "Matematika bilan tanishing",
    image: require('../Images/math.avif'),
    delayTime: 2050
  }
]

export default function CourseDetail() {
    let { id } = useParams<{ id: string }>();
    const course = courses.find(course => course.id === Number(id));
   

    function showCourseTab(){
      const courseTab = document.getElementById('course-tab') as HTMLDivElement;
      const instructorTab = document.getElementById('instructor-tab') as HTMLDivElement;
      const courseTabBtn = document.getElementById('course-tab-btn') as HTMLButtonElement;
      const instructorTabBtn = document.getElementById('instructor-tab-btn') as HTMLButtonElement;
      courseTab.style.display = 'block';
      instructorTab.style.display = 'none';
      courseTabBtn.style.backgroundColor = '#ddd';
      instructorTabBtn.style.backgroundColor = '#f2f2f2';
    }

    function showInstructorTab(){
      const courseTab = document.getElementById('course-tab') as HTMLDivElement;
      const instructorTab = document.getElementById('instructor-tab') as HTMLDivElement;
      const courseTabBtn = document.getElementById('course-tab-btn') as HTMLButtonElement;
      const instructorTabBtn = document.getElementById('instructor-tab-btn') as HTMLButtonElement;
      courseTab.style.display = 'none';
      instructorTab.style.display = 'block';
      courseTabBtn.style.backgroundColor = '#f2f2f2';
      instructorTabBtn.style.backgroundColor = '#ddd';
    }

    return (
    <div data-aos="flip-right" data-aos-duration="1500">
      <div className="course-detail-page">
      <div className="tabs">
        <button className="tab-btn" id="course-tab-btn" onClick={showCourseTab}><i className="fas fa-book"></i> Malumot</button>
        <button className="tab-btn" id="instructor-tab-btn" onClick={showInstructorTab}><i className="fas fa-chalkboard-teacher"></i> O'qituvchi</button>
      </div>
      <div className="tab-content">
        <div className="course-tab" id="course-tab">
          <img className='detail-image' src={course?.image} alt='course'/>
          <h1>{course?.name}</h1>
          <p>{course?.description}</p>
          <ul>
            <li>Davomiylik: 8 oy</li>
            <li>Daraja: Lyuboy</li>
            <li>Boshqa: boshqa</li>
          </ul>
        </div>
        <div className="instructor-tab" id="instructor-tab">
          <img className='detail-image' src={course?.image} alt='course'/>
          <h2>O'qituvchi ismi</h2>
          <p>O'qituvchi haqida</p>
          <ul>
            <li>Univer: Toshmi</li>
            <li>Tajriba: 10 yil</li>
            <li>Mutaxasislik: nothing</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
