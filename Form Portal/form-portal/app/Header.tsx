import Image from 'next/image'

export default function Header() {
  return (
    <div className="w-full h-32 bg-emerald-600 flex justify-between">
        <Image className="p-2" src="/otk-logo-white.png" alt="Otakuthon logo" width={500} height={120} />
    </div>
  )
}