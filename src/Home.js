import { useState } from "react";

const Home = () => {
    
    let [Blog,setBlog]=useState([
        {title: "My website",  body:"lorem ipsum.......", auth: "taijul", id: 1},
        {title: "My Blog",     body:"lorem ipsum.......", auth: "islam", id: 2},
        {title: "New website", body:"lorem ipsum.......", auth: "mohim", id: 3}

    ]);

    return ( 
        <div className="home">
            

        
            
        </div>
     );
}
 
export default Home;