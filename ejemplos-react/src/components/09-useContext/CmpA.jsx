import { useContext } from "react"
import { isAuthContext } from "../../contexts/is-authenticated.context"
import { langContext } from "../../contexts/lang.context"
import { translate } from "../../helpers/translate"

const CmpA = () => {
  const lang = useContext(langContext)
  const isAuthenticated = useContext(isAuthContext)

  return (
    <div>
      <h3>Cmp A</h3>
      {isAuthenticated ? <p>{translate('hola', lang)} Charly</p> : <p>Logueate</p>}
    </div>
  )
}

export default CmpA