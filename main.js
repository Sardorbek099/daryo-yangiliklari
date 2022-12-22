// let currentNews=daryoYangiliklari.slice(0,3)
// lastAddedNewsIndex=2
let currentIndex
reRender(daryoYangiliklari)
 
function reRender(item){
    let newsSection=document.querySelector(".newsSection")
    newsSection.innerHTML=""
    
    item.map((news, index)=>{


        let title=document.createElement("p")
        title.innerText=news.title

        let photo=document.createElement("img")
        photo.src=news.photo
        photo.style.width="100%"

        let button1=document.createElement("button")
        button1.innerText="подробнее"
        button1.setAttribute("onclick", `moreFun(${index})`)
        button1.setAttribute("data-bs-toggle", "modal") 
        button1.setAttribute("data-bs-target", "#staticBackdrop") 
        button1.classList.add("btn","btn-success","mt-5")
        
        let button2=document.createElement("button")
        button2.innerText="не интересно"
        button2.setAttribute("onclick", `deleteNews(${index})`) 
        button2.classList.add("btn","btn-danger","mt-2")
        
        let button3=document.createElement("button")
        button3.innerText="редактировать"
        button3.setAttribute("onclick", `editNews(${index})`)
        button3.setAttribute("data-bs-toggle", "modal") 
        button3.setAttribute("data-bs-target", "#exampleModal")  
        button3.classList.add("btn","btn-warning","mt-2")
        
        let card=document.createElement("div")
        card.classList.add("card", "p-5")

        let col = document.createElement("div")
        col.classList.add("col-6","col-xl-4")

        card.appendChild(title)
        card.appendChild(photo) 
        card.appendChild(button1)
        card.appendChild(button2)
        card.appendChild(button3)

        col.appendChild(card)

        newsSection.appendChild(col)
    
    })  

}


function moreFun(index){
    let modalbody=document.querySelector(".modal-body")
    
    modalbody.innerHTML=""

    let categories=document.createElement("p")
    categories.innerText=daryoYangiliklari[index].categories

    let photo=document.createElement("img")
    photo.src=daryoYangiliklari[index].photo
    photo.style.width="100%"

    let title=document.createElement("p")
    title.innerText=daryoYangiliklari[index].title


    modalbody.appendChild(categories)
    modalbody.appendChild(photo)
    modalbody.appendChild(title)

}


function deleteNews(index){
    daryoYangiliklari.splice(index,1)
    reRender(daryoYangiliklari)
}
function editNews(index) { 
    currentIndex = index
    document.querySelector(".categories").value = daryoYangiliklari[index].categories
    document.querySelector(".title").value = daryoYangiliklari[index].title
    document.querySelector(".photo").value = daryoYangiliklari[index].photo


}


function editCurrentNews() {
    let categories = document.querySelector(".categories").value
    let title = document.querySelector(".title").value
    let photo = document.querySelector(".photo").value


    daryoYangiliklari[currentIndex].categories = categories
    daryoYangiliklari[currentIndex].title = title
    daryoYangiliklari[currentIndex].photo = photo


    document.querySelector(".categories").value=""
    document.querySelector(".title").value = ""
    document.querySelector(".photo").value=""

    reRender(daryoYangiliklari)
 }


function searchNew(key) {
    let newPage = daryoYangiliklari.filter(post => {
        return post.title.toLowerCase().includes(key.value.toLowerCase())
    })

    reRender(newPage)
}









