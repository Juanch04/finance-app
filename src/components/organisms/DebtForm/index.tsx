import { Button } from '@nextui-org/button'

const DebtForm = () => {
  return (
    <form>
      <div>
        <label htmlFor=''>Nombre de la deuda</label>
        <input type='text' />
      </div>

      <Button>Click me</Button>
    </form>
  )
}

export default DebtForm
