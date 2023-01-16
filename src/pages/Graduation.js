import Sidebar from '../components/Sidebar';
import MatchingTable from '../components/MatchingTable';
import uuid from 'react-uuid';
import '../App.css';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';


function GraduationPage() {

  const [data, setData] = useState("")
  const [teachers, setTeachers] = useState("")
  const [showTable, setShowTable] = useState(false)

  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-2 p-0">
            <Sidebar selectedPage={"/graduation"} />
          </div>
          <div className="col-10 p-0">
            {showTable ? (<MatchingTable data={data} teachers={teachers} />) : (<GetInputData setData={setData} setTeachers={setTeachers} setShowTable={setShowTable} />)}
          </div>
        </div>
      </div>
    </div>
  );
}


function GetInputData({ setData, setTeachers, setShowTable }) {

  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="col-4">
            <h3 className="text-center">Please enter your JSON data</h3>
            <div className="mb-3">
              <textarea className="form-control" rows="3" onChange={handleChange} value={input} ></textarea>
            </div>
            <button className="btn" onClick={() => {
              navigator.clipboard.readText().then((text) => {
                setInput(text)
              })
            }}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
          </svg></button>
            <button className="btn btn-primary" onClick={() => {
              const { usefulData, teachers } = createData(input)
              console.log("usefulData: ", usefulData)
              setData(usefulData)
              setTeachers(teachers)
              setShowTable(true)
            }}>Submit</button>
          </div>
        </div>
      </div>
    </div>

  )
}


function createData(input) {
  let outSourceData = JSON.parse(input)
  console.log("outSourceData: ", outSourceData)
  let teachers = []
  teachers = outSourceData.map((item) => {
    return item.teacher_name
  })
  teachers = [...new Set(teachers)]
  let usefulData = []
  let temp = []
  teachers.forEach((teacher) => {
    temp = []
    outSourceData.forEach((item) => {
      if (item.teacher_name === teacher) {
        temp.push({ name: item.student_name, id: uuid() })
      }
    })
    usefulData.push(temp)
  })
  return { usefulData, teachers }
}


export default GraduationPage;