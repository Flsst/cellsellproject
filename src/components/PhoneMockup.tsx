interface PhoneMockupProps {
  className?: string
  screen?: string
  bodyClassName?: string
  screenClassName?: string
  float?: boolean
  floatSpeed?: 'normal' | 'slow'
  tilt?: string
  delay?: string
}

const screenStyles: Record<string, string> = {
  warm: 'linear-gradient(160deg, #ffe9b8 0%, #ffb08a 30%, #ff6b5e 55%, #e0448f 80%, #ff5c8a 100%)',
  cool: 'linear-gradient(160deg, #ffffff 0%, #ffe9b8 18%, #ff8a3d 45%, #e0448f 70%, #0a0a0a 100%)',
  sunset: 'linear-gradient(160deg, #2a0a1e 0%, #e0448f 40%, #ff6b5e 65%, #ff8a3d 85%, #ffe9b8 100%)',
  magenta: 'linear-gradient(165deg, #0a0a0a 0%, #3d0f2b 35%, #e0448f 65%, #ff5c8a 100%)',
  default: 'linear-gradient(160deg, #ffe9b8 0%, #ff8a3d 40%, #ff5c8a 75%, #e0448f 100%)',
}

export default function PhoneMockup({
  className = '',
  screen = 'default',
  bodyClassName = '',
  screenClassName = '',
  float = false,
  floatSpeed = 'normal',
  tilt = '',
  delay,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative aspect-[9/18.6] ${className} ${float ? (floatSpeed === 'slow' ? 'phone-float-slow' : 'phone-float') : ''}`}
      style={delay ? { animationDelay: delay } : undefined}
      aria-hidden="true"
    >
      <div className={`h-full w-full ${tilt}`}>
        <div
          className={`relative h-full w-full rounded-[2.4rem] bg-foreground p-[5px] ${bodyClassName}`}
          style={{ boxShadow: '0 30px 60px -30px rgba(10,10,10,0.45)' }}
        >
          <div
            className={`relative h-full w-full overflow-hidden rounded-[2rem] ${screenClassName}`}
            style={{ background: screenStyles[screen] ?? screenStyles.default }}
          >
            <div className="absolute left-1/2 top-2.5 h-[6px] w-1/3 -translate-x-1/2 rounded-full bg-foreground/90" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(120deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 22%, rgba(255,255,255,0) 40%)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
