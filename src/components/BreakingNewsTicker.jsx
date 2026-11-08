
import { AlertTriangle } from 'lucide-react'
import newsData from '../data/newsData.json'

function BreakingNewsTicker() {
  return (
    <div className="flex min-h-10 items-center overflow-hidden bg-red-800 text-white">

      <div className="z-10 flex shrink-0 items-center gap-2 bg-red-950 px-4 py-3 text-xs font-bold sm:text-sm">
        <AlertTriangle size={18} />
        <span>SAFETY UPDATES</span>
      </div>

      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="ticker-content flex w-max items-center gap-12 whitespace-nowrap px-6 text-sm">

          {newsData.map((alert) => (
            <span
              key={alert.id}
              className="inline-flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-white" />
              {alert.message}
            </span>
          ))}

        </div>
      </div>

    </div>
  )
}

export default BreakingNewsTicker
