import { useEffect, useState } from "react"

const Validations = {
  minLength: (value, requiredLength) => {
    if (value.length < requiredLength) {
      return `Necesitas ${requiredLength} letras`
    }
    return null
  },
  mayus: (value) => {
    if (value.toLowerCase() === value) {
      return 'Necesitas al menos una letra en mayúscula'
    }
    return null
  },
  email: (value) => {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexp.test(value)) {
      return 'El email no es válido'
    }
    return null
  }
}


export const useInputField = (initialValue = '', validations) => {
  const [value, setValue] = useState(initialValue)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const errores = []

    Object.entries(validations).forEach((validation) => {
      const [type, val] = validation
      const validate = Validations[type]
      if (validate) {
        const msg = validate(value, val)
        if (msg) {
          errores.push({type, text: msg})
        }
      }
    })

    // if (value.length < 5) {
    //   errores.push({type: 'min-length', text: 'Necesitas 5 letras'})
    // }

    // if (value.toLowerCase() === value) {
    //   errores.push({type: 'mayus', text: 'Necesitas al menos una letra en mayúscula'})
    // }

    setErrors(errores)
  }, [value])

  return [
    value,
    setValue,
    errors
  ]
}