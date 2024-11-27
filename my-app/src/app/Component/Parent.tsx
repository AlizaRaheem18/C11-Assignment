
import Child from "./Child";

const Parent = () => {
    let name = "ALIZA"
    let favColor = "White"
    let favDish = "WhiteKarahi" ;
    return(
        <div className="mt-10">
            <Child name ={name}
            favColor ={favColor}
            favDish ={favDish} />
           
        </div>
    )
}
export default Parent