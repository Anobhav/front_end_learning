function Hello(){
    let myName = 'Anobhav'
    let fullName=()=>{
        return 'Anobhav Singh'
    }
    let number=456
    return <h2>message number {number} this is the dynamic {fullName()}</h2>
}

export default Hello