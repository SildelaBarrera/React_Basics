// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  
  //se pueden pasar funciones como props (en este caso para incluir el @ en el username por ejemplo)
    //función en la que al pasarle el username le añada el @:

    const format = (userName) => `@${userName}`

  return (
  //creamos un section para que los cambios de margin/gap afecten solo a este contenedor "App" y no al componente en sí
    <section className="App" > 
      <h1 className='title'>A quién seguir</h1>
      <TwitterFollowCard 
        formatUserName = {format} 
        // isFollowing    (puesto así se manda como props, pero como queremos que sea un estado lo borrarmos de aquí)
        //pero si queremos que nada más entrar ya aparezca "Siguiendo" se hace una props para inicializar:
        initialIsFollowing
        userName="sdelacruz1990" 
        avatar="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas_23-2149436191.jpg">
        Sandra de la Cruz
      </TwitterFollowCard>

      <TwitterFollowCard 
        formatUserName = {format} 
        // isFollowing 
        avatar="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436188.jpg">
        Pablo Hernández
      </TwitterFollowCard>

      <TwitterFollowCard 
        formatUserName = {format} 
        // isFollowing={false} 
        userName="vandersoph" 
        avatar="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-cabello-rosado_23-2149436186.jpg ">
        Sophie Vanderhart
      </TwitterFollowCard>
    
    {/* por ejemplo, el nombre que está suelto podría ser el hijo del twitterFollowCard, y se podría pasar también como prop   */}
    
    </section>
  )
}

export default App
