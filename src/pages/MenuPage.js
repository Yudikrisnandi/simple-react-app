import { useState } from 'react'
import Table from '../components/Table'
import Drawer from '../components/Drawer'
import Button from '../components/Button'
import CustomerForm from '../forms/CustomerForm'

export default function MenuPage(){
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);



  return(
    <div className="flex w-full h-screen text-grey-900 bg-gray-100">
      <div className="flex flex-col flex-1 p-4 overflow-auto border-r">
        <div className="flex mt-3 mb-10">
          <h1 className="text-3xl font-bold">Job Control & Service Progress</h1>
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
        <Table/>
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
      <Drawer isOpen={open} onClose={closeDrawer}>
        <CustomerForm/>
      </Drawer>
    </div>
  )
}
