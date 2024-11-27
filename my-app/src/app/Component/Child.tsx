

const Child =(props:any) =>{
    console.log(props)
    return(
        <div>
        <h1 className="text-center  text-blue-950 text-3xl font-extrabold my-10 py-4">
         FullName: {props.name} <br />
         FavoriteColor: {props.favColor} <br />
         FavDish: {props.favDish} <br />
        </h1>
      </div>
    )
}

export default Child