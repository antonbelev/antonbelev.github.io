import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Правила" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Познайте УЪРДЪЛ със 6 опита. След всеки опит, цветът на плочките ще се промени, за да Ви покаже колко близко сте до точната дума.
      </p>

    <p className="text-sm text-gray-500">
       За българските почитатели на тази игра, това може да се определи като вариант на известната игра от нашето детство - "бесеница".
    </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Д" status="correct" />
        <Cell value="Е" />
        <Cell value="Й" />
        <Cell value="Н" />
        <Cell value="О" />
      </div>
      <p className="text-sm text-gray-500">
        Буквата Д е в думата и същто така е на правилното място.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Л" />
        <Cell value="Е" />
        <Cell value="К" status="present" />
        <Cell value="А" />
        <Cell value="Р" />
      </div>
      <p className="text-sm text-gray-500">
        Буквата К е в думата, но на гешното място.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="У" />
        <Cell value="М" />
        <Cell value="Н" />
        <Cell value="И" status="absent" />
        <Cell value="К" />
      </div>
      <p className="text-sm text-gray-500">
        Буквата И не е в думата.
      </p>
    </BaseModal>
  )
}
