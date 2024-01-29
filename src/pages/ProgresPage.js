import Table from '../components/Table'
import Button from '../components/Button'
import Footer from '../components/Footer'
import DateTimeDisplay from '../components/DateTimeDisplay'
import logo from '../assets/logo.png'
import { welcomeData } from '../utils/mockData'

export default function ProgresPage(){
  const columns = [...Object.keys(welcomeData[0])];
  return(
    <div className="h-screen bg-gray-100 flex flex-col justify-between">
      <div className="px-3">
        <div className="flex flex-row flex-1 justify-between items-center p-4">
          <img src={logo} alt="logo maju motor group" className="w-56"/>
          <div className="flex mt-3 mb-10">
            <h1 className="text-4xl font-bold text-indigo-950">Selamat Datang</h1>
          </div>
          <DateTimeDisplay/>
        </div>
        <Table data={welcomeData} columns={columns}/>
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
      </div>
      <Footer/>
    </div>
  )
}
