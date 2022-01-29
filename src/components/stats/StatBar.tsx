import { GameStats } from '../../lib/localStorage'

type Props = {
  gameStats: GameStats
}

const StatItem = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => {
  return (
    <div className="items-center justify-center m-1 w-1/4">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs">{label}</div>
    </div>
  )
}

export const StatBar = ({ gameStats }: Props) => {
  return (
    <div className="flex justify-center my-2">
      <StatItem label="Общо игри" value={gameStats.totalGames} />
      <StatItem label="Процент успеваемост" value={`${gameStats.successRate}%`} />
      <StatItem label="Текуща серия" value={gameStats.currentStreak} />
      <StatItem label="Най-добра серия" value={gameStats.bestStreak} />
    </div>
  )
}
