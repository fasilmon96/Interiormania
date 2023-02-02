
import './Poster.css'



function Poster({phonesData,name}) {

  

  


  return (

    <div className='aa'
  >

   
       <h4 className='ss'>{name}</h4>
    
    <div className='re' >



      {phonesData.map((phone)=>
         
        (
          
          <div className='row '>
        <div className='posters' id='BEDROOM'>
        <img className='poster' alt='poster'src={phone.url} />
     

                

    
       


              


           
        
        </div>
      
    </div>



         )


      )}



     </div>
     </div>
    
  )
}

export default Poster
