import { useEffect, useState } from "react";
import { isAuthContext } from '../../contexts/is-authenticated.context';
import { langContext } from '../../contexts/lang.context';
import { getLang, setLang as setLangStore } from "../../services/lang.service";
import CmpA from "./CmpA";
import CmpB from "./CmpB";

const IDIOMAS = [
  {code: 'es', texto: 'Español'},
  {code: 'en', texto: 'Inglés'},
  {code: 'it', texto: 'Italiano'},
]

const CmpUseContext = () => {
  const [lang, setLang] = useState('')

  useEffect(() => {
    const lang = getLang()
    setLang(lang)
  }, [])

  useEffect(() => {
    setLangStore(lang)
  }, [lang])

  return (
    <div>
      <h2>useContext</h2>
      <select name="idioma" id="idioma" value={lang} onChange={(e) => setLang(e.target.value)} >
        {IDIOMAS.map(lang => <option key={lang.code} value={lang.code}>{lang.texto}</option>)}
      </select>

      <langContext.Provider value={lang}>
        <isAuthContext.Provider value={false}>
          <CmpA />
        </isAuthContext.Provider>

        <CmpA />
        <CmpB />
      </langContext.Provider>

    </div>
  )
}

export default CmpUseContext