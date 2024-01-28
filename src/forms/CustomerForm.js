import InputText from '../components/InputText'
import Checkbox from '../components/Checkbox'

export default function CustomerForm(){
  return(
    <form>
      <InputText
        placeholder="Search..."
      />
      <Checkbox label="Enable Feature" checked={true} />
    </form>
  )
}
