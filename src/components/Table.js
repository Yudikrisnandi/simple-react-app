import Badge from './Badge';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';

const badgeVariant = {
  'Final Inspection': 'primary',
  'Proses Pengerjaan': 'success',
  'Tunggu Penyerahan': 'warning',
}

export default function Table({ data, columns, columnHeads }){
  const _columnHeads = columnHeads ? columnHeads : columns;
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const handleSelect = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };
  

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const renderColumnContent = (column, row) => {
    if (column === 'status') {
      return <Badge text={row[column]} variant={badgeVariant[row[column]]} />;
    } else if (column === 'jenisPekerjaann') {
      return <Dropdown 
        options={options} 
        onSelect={handleSelect}
      />;
    } else if(column === 'isWashing' || column === 'isVacuming'){
      return <Checkbox checked={row[column]}/>;
    } else if(column === 'isWaitByCustomer'){
      const text = row[column] ? "Ditunggu" : 'Ditinggal';
      const variant = row[column] ? 'error' : "primary" 
      return <Badge text={text} variant={variant} />;
    } else {
      return typeof row[column] === 'boolean' ? "Ya" : row[column];
    }
  }

  return(
    <table className="table flex table-auto w-full leading-normal">
      <thead className="uppercase text-gray-600 text-xs font-semibold bg-white border-b-2 border-gray-200">
        <tr className="hidden md:table-row">
          {_columnHeads.map((column) => (
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
              return(
                <td key={columnIndex} className="py-1 md:p-3">
                  {renderColumnContent(column, row)}
                </td>
              )
            })}

          </tr>
        ))}
      </tbody>
    </table>
  )
}
