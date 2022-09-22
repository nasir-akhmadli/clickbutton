const colors = ['blue','yellow','red','brown','orange'];

const button = document.getElementById('button');

button.addEventListener('click',randomRengliQutularYarat);

function randomRengliQutularYarat (){
    // console.log(Math.floor(Math.random() * colors.length))
    // console.log(colors[2])
    const randomColor  = colors[Math.floor(Math.random() * colors.length)]
    const topPx = Math.floor(Math.random()*800)
    const leftPx = Math.floor(Math.random()*1200)
    const container = document.getElementById('container');

    console.log(topPx, leftPx)

    const myDivEl = document.createElement('div')
    myDivEl.style.width = "30px"
    myDivEl.style.height = "30px"
    myDivEl.style.backgroundColor = randomColor

    myDivEl.style.position = "absolute"
    myDivEl.style.left = `${leftPx}px`
    myDivEl.style.top = `${topPx}px`

    container.appendChild(myDivEl)

    
}