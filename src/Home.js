import { useState } from "react";

const Home = () => {

    const [name,setname]=useState('mohim');
    const [age,setAge]=useState(20);
    const handClick = () =>{
    setname ("shuvo");
    setAge (26);
    } ;
   
   
    return ( 
        <div className="home">
            <h2>HomePAGE</h2>
            <p>My {name} and my age is {age}</p>
            <button onClick={handClick}>Click ME</button>
            
        </div>
     );
}
 
export default Home;