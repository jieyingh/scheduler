import Image from 'next/image'
import {ToggleButtonGroup, ToggleButton} from "@mui/material";
import {MouseEvent, useState} from "react";

export default function Header() {
  const [lang, setLang] = useState("en");

  const handleLangChange = (event: MouseEvent, newLang: string) => {
    setLang(newLang);
  }

  return (
    <div className="w-full h-32 bg-emerald-600 flex justify-between px-8">
        <Image className="p-2" src="/otk-logo-white.png" alt="Otakuthon logo" width={500} height={120} />
        <div className="h-full flex items-center">
          <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={handleLangChange}
            aria-label="text alignment"
          >
            <ToggleButton value="en" aria-label="English">
              EN
            </ToggleButton>
            <ToggleButton value="fr" aria-label="Français">
              FR
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
    </div>
  )
}