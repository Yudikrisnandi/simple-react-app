import Badge from './Badge';
import { mockData } from '../utils/mockData'
import Option from '../assets/Option';

/*
no polisi
nama pelanggan
type/model
ditunggu/ditinggal
status pekerjaan
permintaan service
cuci?
jam masuk
jam keluar
status pengerjaan
*/

const badgeVariant = {
  'Final Inspection': 'primary',
  'Proses Pengerjaan': 'success',
  'Tunggu Penyerahan': 'warning',
}

export default function Table({ data=mockData }){
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const columns = [...Object.keys(data[0]), 'actions']

  return(
    <table className="table flex table-auto w-full leading-normal">
      <thead className="uppercase text-gray-600 text-xs font-semibold bg-white border-b-2 border-gray-200">
        <tr className="hidden md:table-row">
          {columns.map((column) => (
            <th className="text-left p-3">
              {column.replace(/([A-Z])/g, ' $1').trim()} 
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex-1 text-gray-700 sm:flex-none">
        {data.map((row, rowIndex)=> (
        <tr className={
          `border-t first:border-t-0 flex p-1 md:p-3 ${rowIndex % 2 === 0 ? 'bg-grey' : 'bg-white'} 
          md:table-row hover:bg-gray-200 flex-col w-full flex-wrap`
        }>
            {columns.map((column, columnIndex) => {
              const rowContent = typeof row[column] === 'boolean' ? "YES" : row[column];
              return(
                <td key={columnIndex} className="py-1 md:p-3">
                  {column === 'actions' ? (
                    <Option/>
                  ) : column === 'status' ? (
                    // Replace with your Badge component or display the content directly
                    <Badge text={rowContent} variant={badgeVariant[rowContent]} />
                  ) : (
                    rowContent
                  )}
                </td>
              )
            })}

          </tr>
        ))}
      </tbody>
    </table>
  )
}
