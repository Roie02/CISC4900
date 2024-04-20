import {useState} from 'react'

function CarForm({addCar}) {
  const [formData, setFormData]=useState({make: '', model: '', year: '', image: '', cost: '', hp: '', info: ""})
  const {make,model,year,image,cost,hp,info}=formData

  function handleChange(e) {
    const {name, value}= e.target
    setFormData({...formData, [name]:value})
  }
  
  function handleSubmit(e){
    e.preventDefault()
    const newObj = {make: make, model: model, year: year, image: [image], cost: cost, hp: hp, info: info}
    addCar(newObj)
    setFormData({make: '', model: '', year: '', image: '', cost: '', hp: '', info: ""})
  }

  return (
        <div>
            <h1>Submit Vehicle</h1>
          <form className='carForm' onSubmit={handleSubmit}>
            <input type='text' placeholder='make' name='make' onChange={handleChange} value={make}/>
            <input type='text' placeholder='model' name='model' onChange={handleChange} value={model}/>
            <br></br>
            <input type='number' placeholder='year' name='year' onChange={handleChange} value={year}/>
            <input type='text'placeholder='image' name='image' onChange={handleChange} value={image}/>
            <br></br>
            <input type='text'placeholder='cost' name='cost' onChange={handleChange} value={cost}/>
            <input type='number'placeholder='horsepower' name='hp' onChange={handleChange} value={hp} />
            <br></br>
            <textarea className='textArea' placeholder='Info' name='info' onChange={handleChange} value={info}>
           </textarea>
           <br></br>
           <input id='submitCarBtn' className='addCarInput' type='submit'/>
        </form>
      </div>
  )
}

export default CarForm