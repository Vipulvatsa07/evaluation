import React, { useEffect } from "react";
import Link from "next/link";


const Project = ({data}) => {
  
  return (
   
  <div >
     <h1 style={{textAlign:"center"}} >Projects</h1>
   { data.map((el)=>{
      return ( <div style={{display:"flex" ,justifyContent:"center"}} >
      <div style={{border:"1px solid black",textAlign:"center",width:"400px",height:"200px",backgroundColor:"teal" }}>
            {/* <Link href={el.html_url}/> */}
          <Link style={{textDecoration:"none",color:"black"}} href={el.html_url}>
            <div>
          <h1>{el.name}</h1>
            </div>
            <div>
              <h3>forks:{el.forks_count}</h3>
              <h3>count:{el.size}</h3>
            </div>
            <h4>Language:{el.language}</h4>
            </Link>
            </div> </div>)

    })}
  </div>
  );
};

export const getServerSideProps=async()=>{
  let r=await fetch("https://api.github.com/search/repositories?q=user:Vipulvatsa07+fork:true&sort=updated&per_page=10&type=Repositories")
  r=await r.json();

  return{
    props:{
      data:r.items
    }
  }
}

export default Project;
