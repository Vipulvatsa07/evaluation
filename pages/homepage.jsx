import Image from "next/image";
import Link from "next/link";

export default function Homepage({data})
{
    return(
        <>
        <div style={{display:"flex" ,justifyContent:"center"}}>
            <div >
        <Image src={data.avatar_url} alt="profile" width={200} height={200}/>
        <h1>{data.name}</h1>
        <h3>{data.bio}</h3>
        <Link href="https://drive.google.com/file/d/1ZOHy7RBu_jbJRTzDQOC5pAU-GQIBFe0C/view?usp=sharing"><button>RESUME</button></Link>
        <div style={{display:"flex"}}>
        <h2 style={{border:"1px solid black"}}>React</h2>
        <h2 style={{border:"1px solid black"}}>CSS</h2>
        <br />
        <h2 style={{border:"1px solid black"}}>JavaScript</h2>
        <h2 style={{border:"1px solid black"}}>NextJS</h2>
        <h2 style={{border:"1px solid black"}}>TypeScript</h2>
        </div>
        
        <h1>Masai School</h1>
        <h3>Full stack web Developement</h3>
        </div>
        </div>
        </>
    )
}


export const getStaticProps=async()=>{

    let r=await fetch("https://api.github.com/users/Vipulvatsa07")
        r=await r.json();
        return{
            props:{
                data:r,
            }
        }
}