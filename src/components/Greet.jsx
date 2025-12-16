import Profile from "./students"

function Greeting(prop){
    return (
        <div>
            <Profile name={prop.name}/>
            <p>25th december Holiday on the occasion of christmas..........</p>
        </div>
    )
}

export default Greeting