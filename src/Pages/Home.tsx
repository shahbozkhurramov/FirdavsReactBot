import React from 'react'
import CourseList from '../Components/CourseList';
import { CourseModel } from '../Models/CourseModel';

export default function Home() {
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
      description: "If you want to learn English, you can learn it with us. Register now!",
      image: require('../Images/english.avif'),
      delayTime: 1200
    },
    {
      id: 3,
      name: "Kimyo",
      description: "Kimyo bilan tanishing",
      image: require('../Images/chemistry.avif'),
      delayTime: 1400
    },
    {
      id: 4,
      name: "Matematika",
      description: "Matematika bilan tanishing",
      image: require('../Images/math.avif'),
      delayTime: 1600
    }
  ]

  return (
        <CourseList courses={courses}/>
  )
}
