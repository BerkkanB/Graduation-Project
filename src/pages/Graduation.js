import Sidebar from '../components/Sidebar';
import MatchingTable from '../components/MatchingTable';
import uuid from 'react-uuid';
import '../App.css';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

const {usefulData,teachers} = CreateData()
console.log(usefulData,teachers)

function GraduationPage() {
    const [data, setData] = useState("")
    const [teachers, setTeachers] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const {usefulData,teachers} = await CreateData()
            setData(usefulData)
            setTeachers(teachers)
        }
        fetchData()
    }, [])
    console.log(data,teachers)
    return (
      <div className="App">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-2 p-0">
              <Sidebar selectedPage={"/graduation"} />
            </div>
            <div className="col-10 p-0">
              {data ? (<MatchingTable data={data} teachers={teachers} />) : (<Loading/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  async function CreateData(){
    // add delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 3300));
    const outSourceData = [{"student_name": "yurtcular17", "teacher_name": "ercengiz"}, {"student_name": "dumanli18", "teacher_name": "tanriovere"}, {"student_name": "celikbas15", "teacher_name": "senturk"}, {"student_name": "bilgine18", "teacher_name": "fozdemir"}, {"student_name": "azmans18", "teacher_name": "fozdemir"}, {"student_name": "kayafe18", "teacher_name": "kiris"}, {"student_name": "akbulutd18", "teacher_name": "fozen"}, {"student_name": "koco17", "teacher_name": "demircial"}, {"student_name": "uzunb16", "teacher_name": "koruc"}, {"student_name": "coplu18", "teacher_name": "gokseli"}, {"student_name": "nikiforov15", "teacher_name": "bizgi"}, {"student_name": "tekbas20", "teacher_name": "ilkayb"}, {"student_name": "tonoglu19", "teacher_name": "demircial"}, {"student_name": "tuten18", "teacher_name": "tungab"}, {"student_name": "yildizse17", "teacher_name": "hacinliy"}, {"student_name": "yukselay20", "teacher_name": "aduran"}, {"student_name": "serdarh18", "teacher_name": "ergezen"}, {"student_name": "gungordua18", "teacher_name": "kaygun"}, {"student_name": "altin18", "teacher_name": "gokseli"}, {"student_name": "sahinibr17", "teacher_name": "nadar"}, {"student_name": "gozutokmeh16", "teacher_name": "ilkayb"}, {"student_name": "gocer15", "teacher_name": "tanriovere"}, {"student_name": "tokuc16", "teacher_name": "yaraneri"}, {"student_name": "agbaba18", "teacher_name": "ergezen"}, {"student_name": "civelekg18", "teacher_name": "gokseli"}, {"student_name": "butun18", "teacher_name": "antarn"}, {"student_name": "apaydink19", "teacher_name": "antarn"}, {"student_name": "denizhu", "teacher_name": "koruc"}]
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
          temp.push({name: item.student_name, id: uuid()})
        }
      })
      usefulData.push(temp)
    })
    return {usefulData, teachers}
  }


export default GraduationPage;