import React from 'react'
import Button from '../components/Button';
import Dropdown from '../components/DropdownInput'
import Checkbox from '../components/Checkbox'

export default function Form({ title, onClose, handleClickAddNewCustomer }) {
  const [selectedPekerjaan, setSelectedPekerjaan] = React.useState('');
  const [selectedService, setSelectedService] = React.useState('');

  const pekerjaanOptions = [
    { value: 'Regular', label: 'Regular' },
    { value: 'Booking', label: 'Booking' },
  ];

  const serviceOptions = [
    { value: '20.000KM', label: '20.000KM' },
    { value: '30.000KM', label: '30.000KM' },
    { value: '40.000KM', label: '40.000KM' },
    { value: '50.000KM', label: '50.000KM' },
  ];

  const handlePekerjaanChange = (id, value) => {
    setSelectedPekerjaan(value);
  };

  const handleServiceChange = (id, value) => {
    setSelectedService(value);
  };

  function onSubmit(){
    handleClickAddNewCustomer()
  }

  return (
    <form className="p-5 flex h-full flex-col justify-between">
      <div className="">
        <div className="text-3xl font-bold mb-4">
          Add New Customer
        </div>
        {/* Section 1: User Information */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-5">User Information</h2>
          <div className="mb-4">
            <label htmlFor="nameCustomer" className="block text-gray-700 text-sm font-semibold mb-2">
              Nama Customer:
            </label>
            <input
              type="text"
              id="nameCustomer"
              name="nameCustomer"
              className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Nama Customer"
            />
          </div>
          <div className="flex space-x-2">
            <div className="w-full">
              <label htmlFor="noPolisi" className="block text-gray-700 text-sm font-semibold mb-2">
                No Polisi:
              </label>
              <input
                type="text"
                id="noPolisi"
                name="noPolisi"
                className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter No Polisi"
              />
            </div>
            <div className="w-full">
              <label htmlFor="typeMobile" className="block text-gray-700 text-sm font-semibold mb-2">
                Type Mobile:
              </label>
              <input
                type="text"
                id="typeMobile"
                name="typeMobile"
                className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Type Mobile"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Service Advisor */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-5">Service Advisor</h2>
          <div className="flex space-x-2">
            <Dropdown
              id="pekerjaan"
              label="Pekerjaan"
              options={pekerjaanOptions}
              onChange={handlePekerjaanChange}
              value={selectedPekerjaan}
            />
            <Dropdown
              id="service"
              label="Permintaan Service"
              options={serviceOptions}
              onChange={handleServiceChange}
              value={selectedService}
            />
          </div>
          <div className="flex justify-between space-x-2">
            <div className="mb-4 w-full">
              <label htmlFor="jamMasuk" className="block text-gray-700 text-sm font-semibold mb-2">
                Jam Masuk:
              </label>
              <input
                type="time"
                id="jamMasuk"
                name="jamMasuk"
                className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="jamKeluar" className="block text-gray-700 text-sm font-semibold mb-2">
                Jam Keluar:
              </label>
              <input
                type="time"
                id="jamKeluar"
                name="jamKeluar"
                className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Ditunggu/Ditinggal?</label>
            <div>
              <label className="inline-flex items-center mr-4">
                <input type="radio" className="form-radio text-blue-500" name="status" value="ditunggu" />
                <span className="ml-2">Ditunggu</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-500" name="status" value="ditinggal" />
                <span className="ml-2">Ditinggal</span>
              </label>
            </div>
          </div>
          <div className="flex space-x-2">
            <Checkbox label="Cuci" checked />
            <Checkbox label="Vacum" />
          </div>
        </div>
        {/* Section 3: PIC*/}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-5">PIC</h2>
          <div className="flex space-x-2">
            <div className="mb-4 w-full">
              <label htmlFor="foreman" className="block text-gray-700 text-sm font-semibold mb-2">
                Foreman:
              </label>
              <input
                type="text"
                id="foreman"
                name="foreman"
                className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Foreman"
              />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="teknik" className="block text-gray-700 text-sm font-semibold mb-2">
                Teknik:
              </label>
              <input
                type="text"
                id="teknik"
                name="teknik"
                className="w-full border rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Teknik"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-2">
        <Button text="Submit" variant="primary" onClick={onSubmit}/>
        <Button text="Close" variant="Secondary" onClick={onClose}/>
      </div>
    </form>
  );
}
