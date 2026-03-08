let images=[
"full/1.jpg",
"full/2.jpg",
"full/3.jpg",
"full/4.jpg",
"full/5.jpg",
"full/6.jpg",
"full/7.jpg",
"full/8.jpg"
]

let index=0

function show(){

let prev=(index-1+images.length)%images.length
let next=(index+1)%images.length

document.getElementById("left").src=images[prev]
document.getElementById("center").src=images[index]
document.getElementById("right").src=images[next]

}

function next(){
index++
if(index>=images.length){
index=0
}
show()
}

function prev(){
index--
if(index<0){
index=images.length-1
}
show()
}

show()