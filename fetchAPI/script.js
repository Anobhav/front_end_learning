const img = document.getElementById('img')
const button = document.getElementById('btn')

const reply = async () => {
    const url = `https://dog.ceo/api/breeds/image/random?${Date.now()}`
    console.log("getting data")

    let response = await fetch(url)
    let data = await response.json()

    img.src = data.message
}

button.addEventListener('click', reply)
