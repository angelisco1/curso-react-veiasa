import { useContext } from 'react';
import { langContext } from '../../contexts/lang.context';
import { translate } from '../../helpers/translate';

const CmpC = () => {
  const lang = useContext(langContext)

  return (
    <div>
      <h4>Cmp C</h4>
      <p>{translate('precio', lang)}: 4.95€</p>
    </div>
  )
}

export default CmpC