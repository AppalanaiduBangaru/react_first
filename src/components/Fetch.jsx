import Customcard from "./Customcard"
import "./Cusromstyle.css"

let data=""

await fetch("https://fakestoreapi.com/products").then((data)=>data.json())
.then((jsondata)=>data=jsondata)

console.log(data)





function Displayitems(){

        return(
            <div id="container">
                {
                    data.map((each)=>

                             <Customcard item={each} />
                        

                    )
                }
                    
            </div>
        )

}
export default Displayitems