import paris from '../images/paris.jpg'

export default function Home(){
  return (
    <>
      <img src={paris} alt="paris de nuit" className='w-100 object-fit-cover' height="300px" />
      <div className="container">
      <h1>Le diagnostic immobilier en Île-de-France</h1>
    </div>
    </>
  )
}