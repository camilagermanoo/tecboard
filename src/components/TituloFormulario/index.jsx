import './titulo-formulario.styles.css'

export function TituloFormulario ({children}) {
    return (
      <h2 className='titulo-form'>
        {children}
      </h2>
    )
}
