import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

function About() {
  const [people, setpeople] = useState([])
const navigate = useNavigate()

  const getpeople = ()=>{
fetch("https://reqres.in/api/users")
.then((res)=>res.json())
.then((data)=>setpeople(data.data))
.catch((error)=>console.log(error))
  }

  useEffect(() => {
    getpeople()
  
  
  }, [])
  

  return (



    <div className="people">
      <div className=" " >   
      <h1 className="text-wrap text-[2.5rem] text-center pt-8  " ><span>BİZ KİMİZ</span></h1  >

       <h2 className="mt[3rem] pl-[3rem] font-bold  text-pink-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit nesciunt reprehenderit exercitationem velit, sunt hic cumque quisquam fugiat qui rerum numquam perferendis excepturi quo ea expedita voluptatem distinctio, architecto itaque omnis quia iure dolorum commodi molestiae laboriosam? Quasi fuga reiciendis quas explicabo repellat adipisci, consectetur odit sed voluptatem dicta porro, nostrum blanditiis ratione quam voluptate eveniet id tempore nisi hic accusamus et aliquid sapiente? Numquam, repudiandae facilis? Amet, doloribus inventore. Laudantium architecto eius dolores et deleniti labore porro atque optio, in, animi eum beatae quae ex est exercitationem ad. Velit laboriosam animi quaerat dolorem quas perferendis ut dolorum adipisci necessitatibus?</h2></div>

      <h1 className='text-center  text-wrap text-[2.5rem] mt-9'>Hakkımızda</h1>
      {people?.map((çalışan)=>{
        const {id,first_name,last_name,avatar} = çalışan
        return(
         <div        key={id}
         className="inline m-[9rem] text-center ml-[12rem] " 
         type="button"
         //? Absolute
         // onClick={() => navigate(`/people/${id}`)}
         //?Relative
         onClick={() => navigate(`${id}`)} >
         
         <img src={avatar}  className="rounded mt-[-6rem]" />
         <h5>{first_name} {last_name}
         
         </h5>
         
         </div> 
        )
        
      })}
      
  
    </div>


  )
}

export default About
