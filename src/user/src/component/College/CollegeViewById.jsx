import React from 'react'
import { useParams } from 'react-router-dom';
import { colleges } from '../College';

const CollegeViewById = () => {
const {id} = useParams()
// const collegeName = colleges.find(college => college.id === +id) // in js + changes data type from string to integer
const collegesInObject = colleges.reduce((acc,college) => {
    acc[college.id] = college
    return acc
},{})

const filteredColleges = collegesInObject[+id]

  return (
    <div>
      <h1>{filteredColleges.name}</h1> 
    </div>
  )
}

export default CollegeViewById
