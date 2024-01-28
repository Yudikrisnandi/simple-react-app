import Table from '../components/Table'
import Button from '../components/Button'
import DateTimeDisplay from '../components/DateTimeDisplay'
import logo from '../assets/logo.png'
import { progresData } from '../utils/mockData'

export default function ProgresPage(){
  const columns = [...Object.keys(progresData[0])];
  return(
    <div className="h-screen bg-gray-100 px-3">
      <div className="flex flex-row flex-1 justify-between items-center p-4">
        <img src={logo} alt="logo maju motor group" className="w-64"/>
        <div className="flex mt-3 mb-10">
          <h1 className="text-4xl font-bold text-indigo-950">Status Pengerjaan</h1>
        </div>
        <DateTimeDisplay/>
      </div>
      <Table data={progresData} columns={columns}/>
      <div className="flex justify-end items-center p-4 mt-3">
        <Button
          text="Privious"
          variant="secondary"
          className="mr-2"
        />
        <Button
          text="Next"
          variant="primary"
        />
      </div>
      <footer className="absolute bottom-0 left-0 w-full h-12 bg-indigo-950 text-white font-bold flex items-center justify-center">
        <marquee behavior="scroll" direction="left">
          ⚪ Selamat datang di Honda Maju Pondok Gede ⚪ Call Center 24H Maju Motor Group: 0811 - 9001 - 9000
        </marquee>
      </footer>
    </div>
  )
}
