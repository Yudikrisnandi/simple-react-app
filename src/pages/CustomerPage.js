import { useState } from 'react'
import Table from '../components/Table'
import Drawer from '../components/Drawer'
import Button from '../components/Button'
import Pagination from '../components/Pagination'
import CustomerForm from '../forms/CustomerForm'
import DateTimeDisplay from '../components/DateTimeDisplay'
import { mockData } from '../utils/mockData'

export default function CustomerPage(){
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(mockData);

  const [value, setValue] = useState('10:00');

   const onChange = (timeValue) => {
      setValue(timeValue);
   }

  const handleClickAddNewCustomer = () => {
    setData([...data, mockData[0]])
  }


  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (page, newItemsPerPage) => {
    setCurrentPage(page);
    if (newItemsPerPage) {
      setItemsPerPage(newItemsPerPage);
    }
    // Add logic to fetch data for the new page
    // This is where you would update your component's state with the new data
  };

  // Total number of items in your data
  const totalItems = 100;

  const mapColumns = {
    noPolisi: 'No Polisi', 
    namaPelanggan: 'Nama Pelanggan', 
    type: 'Type', 
    isWaitByCustomer: 'Ditunggu',
    pekerjaan: 'Pekerjaan', 
    permintaanService: 'Permintaan', 
    isWashing: 'Cuci', 
    isVacuming: 'Vacum', 
    timeIn: 'Masuk', 
    timeOut: 'Estimasi Keluar', 
    foreman: 'Foreman',
    teknisi: 'Teknisi',
    status: 'Proses Pengerjaan'
  }

  const columns = Object.keys(mockData[0]).map(key => mapColumns[key])
  const columnKeys = Object.keys(mockData[0])

  return(
    <div className="flex w-full h-screen text-grey-900 bg-gray-100">
      <div className="flex flex-col flex-1 p-4 overflow-auto border-r">
        <div className="flex mt-3 mb-10 items-center justify-between">
          <h1 className="text-3xl font-bold">Job Control & Service Progress</h1>
          <DateTimeDisplay size="small"/>
        </div>
        <div className="mb-3 w-full flex justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2  h-10 pl-4 pr-10 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <Button
            text="Add New Customer"
            variant="primary"
            onClick={openDrawer}
          />
        </div>
        <Table data={data} columns={columnKeys} columnHeads={columns}/>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Drawer isOpen={open}>
        <CustomerForm onClose={closeDrawer} handleClickAddNewCustomer={handleClickAddNewCustomer} />
      </Drawer>
    </div>
  )
}
