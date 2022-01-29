import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Уърдъл на български" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Това е имплементация на български на нашумялата игра Wordle. Това коепие използва отворен код, който може да намерите - {' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          тук
        </a>{' '}
        също така може да{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          играете оригиналната игра тук.
        </a>
      </p>
    </BaseModal>
  )
}
