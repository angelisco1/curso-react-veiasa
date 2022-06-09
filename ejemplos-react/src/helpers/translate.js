
const TRADUCCIONES = {
  es: {
    hola: 'Hola',
    precio: 'Precio'
  },
  it: {
    hola: 'Ciao',
    precio: 'Prezzo'
  },
  en: {
    hola: 'Hello',
    precio: 'Price'
  }
}

export const translate = (clave, lang) => {
  if (!Object.keys(TRADUCCIONES).includes(lang)) {
    return 'No conocemos este idioma'
  }

  if (!Object.keys(TRADUCCIONES[lang]).includes(clave)) {
    return 'No tenemos la traducción que buscas'
  }

  return TRADUCCIONES[lang][clave]
}