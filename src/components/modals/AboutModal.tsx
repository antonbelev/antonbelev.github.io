import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Уърдъл на български" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Това е имплементация на български на нашумялата игра за познаване на думи. Това коепие използва отворен код, който може да намерите - {' '}
        <a
          href="https://github.com/hannahcode"
          className="underline font-bold"
        >
          тук
        </a>{' '}
        {' '}Отворения код на тази имплементация може да намерите - {' '}
        <a href="https://github.com/antonbelev/antonbelev.github.io"
           className="underline font-bold"
        >
          тук.
        </a>
      </p>
    </BaseModal>
  )
}
