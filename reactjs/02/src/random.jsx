function Random(){
    <h3>This is for reusability</h3>
    let randomnumber=Math.floor(Math.random()*10)
    return <h1 style={{'backgroundColor':'lightblue'}}> random number : {randomnumber}</h1>
}

export default Random