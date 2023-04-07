import Card from "../componentes/Card"
import { useEffect, useState } from "react"

const Series = () => {



    const url =  "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=4bad166a9f589e84f06deef71ad2b0bb&hash=a251780ceb29818edee7eaf56851058d"
    
    
    const [value, setValue]= useState([])
    useEffect(() => {
    
      fetch(url)
      .then((resp)=>resp.json())
      .then((data)=> {
        console.log(data.data.results)
        setValue(data.data.results)
      })
      .catch((err)=>{
        console.log(err);
      })
      
      
    },[])



  return (
    <div>

        <Card value ={value} titulo = "title"/>

    </div>
  )


}

export default Series