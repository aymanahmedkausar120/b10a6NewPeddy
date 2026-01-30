
// btn container fetch 

const btnFetch = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data) => btnDisplayShow(data.categories))
        .catch((err) => console.err(err))
}




// btn container display show 

const btnDisplayShow = (displayBtn) => {
    const btnContainer = document.getElementById('btn-container')
    displayBtn.forEach(catebtn => {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <div id="active-btn${catebtn.category}" onclick="btnVideoFetch('${catebtn.category}')" class="flex gap-3 items-center border-2 px-7 py-4 rounded-xl justify-center cursor-pointer category-active-cls">
            <img class="w-7 h-7" src=${catebtn.category_icon} />
            <p class="text-xl font-bold">${catebtn.category}</p>
        </div>
        `;
        btnContainer.append(btnDiv)
    })

}

// btn video data 
// btn video data 

const btnVideoFetch = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
            // remove all active btn 
            removeActiveBtn()
            spinner2()
            // add active bt 
            const activeBtn = document.getElementById(`active-btn${id}`)
            activeBtn.classList.add('active')
            sortFunction(data.data)
        })
        .catch((err) => console.log(err))
}

// remove active btn 
const removeActiveBtn = () => {
    const removeBtn = document.getElementsByClassName('category-active-cls')
    for (let btn of removeBtn) {
        btn.classList.remove('active')
    }
}


// all image container fetch 

const allPetsFetch = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then((data) => allPetsDisplay(data.pets))
        .catch((err) => console.err(err))
}


// demo 
// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }

// like click image 
// like click image 

// const likeImgFetch = (id) => {
//     fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
//         .then((res) => res.json())
//         .then((data) => likeImgDisplay(data.petData))
//         .catch((err) => console.log(err))
// }

// like click show img 

const likeImgFetch = (likes) => {
    const likeContainer = document.getElementById('like-img-container')
    likeContainer.innerHTML += `
    <div class="border-2 rounded-xl p-1">
       <img src=${likes} class="rounded-xl"/>
    </div>
    `;
}


// pet details 

const detailsBtnFetch = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then((res) => res.json())
        .then((data) => detailsBtnShow(data.petData))
        .catch((err) => console.log(err))
}
// modal demo
// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }


const detailsBtnShow = (details) => {
    const modalContainer = document.getElementById('modal-container')
    modalContainer.innerHTML = `
      <div class="">
          <img class="w-full h-full rounded-xl" src=${details.image} />
      </div>
        <h2 class="text-xl fond-bold text-black">${details.category}</h2>
         
      <div class="border-b-2 flex justify-between pb-3">
          <ul>
             <li class="flex items-center gap-1">
                 <img src="https://img.icons8.com/?size=48&id=85067&format=png" class="w-4 h-4"/>
                 Breed: ${details.breed}
             </li>
             <li class="flex items-center gap-1">
                <img src="https://img.icons8.com/?size=48&id=6vWA99ikHpCe&format=png" class="w-4 h-4"/>
                Gender: ${details.gender}
             </li>
             <li class="flex items-center gap-1">
               <img src="https://img.icons8.com/?size=48&id=6vWA99ikHpCe&format=png" class="w-4 h-4"/>
                vaccinated_status: ${details.vaccinated_status}
             </li>
          </ul>
          <ul>
              <li class="flex items-center gap-1">
                 <img src="https://img.icons8.com/?size=48&id=4p2G9EBQbqA4&format=png" class="w-4 h-4"/>
                   Birth: ${!details.date_of_birth || ["null"].includes(details.date_of_birth) ? "Not Available" : (details.date_of_birth)}
             </li>
            
               <li class="flex items-center gap-1">
                  <img src="https://img.icons8.com/?size=48&id=85801&format=png" class="w-4 h-4"/>
                   Price: ${details.price}
                </li>
             
          </ul>
      </div>

      <h2 class="text-2xl font-bold text-black">Deails Information</h2>
      <p>${details.pet_details}</p>
              
    `;
    document.getElementById('modalBtn').showModal()
}

// abobt button 
const adobtFunction = (button) => {
    button.classList.add('opacity-20')
    button.classList.remove('hover:bg-green-800', 'hover:text-white')
    button.style.pointerEvents = 'none'
    const adobtContainer = document.getElementById('adobt-container')
    adobtContainer.innerHTML = `
     <div>
        <img class="w-12 h-12" src="https://img.icons8.com/?size=96&id=12170&format=png"/>
     </div>
     <h2 class="text-2xl font-extrabold text-black">Congrates</h2>
     <p class="text-xl text-black"> Adobtion Process is Start For your Pet </p>
     <p id="countDown" class="text-2xl font-extrabold text-black">3</p>
    `;
    let count = 3;
    const countDownId = document.getElementById('countDown')
    const modal = document.getElementById('adobtBtn')
    modal.showModal()
    const countId = setInterval(() => {
        count--;
        countDownId.innerText = count
        if (count === 1) {
            clearInterval(countId)
            setTimeout(() => {
                modal.close()
            }, 1000)
        }
    }, 1000);
}


// sort kora 

const sortFunction = (petsAll) => {
    const sorted = petsAll.sort((a, b) => {
        const priceA = parseFloat(a.price)
        const priceB = parseFloat(b.price)
        return priceA - priceB;
    })
    allPetsDisplay(sorted)
    spinner2()
}

// allImgFetch display show 




const allPetsDisplay = (allPets) => {
    const allPetsContainer = document.getElementById('all-pets-container')
    allPetsContainer.innerHTML = "";
    if (allPets.length === 0) {
        allPetsContainer.classList.remove('grid')
        allPetsContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center text-center bg-gray-100 p-24 rounded-xl space-y-2">
           <img src="/assets/error.webp"/>
           <h2 class="text-3xl font-bold text-black">No Information Available</h2>
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
           its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
        `;
        return;
    }

    else {
        allPetsContainer.classList.add('grid')
    }
    allPets.forEach(item => {
        const card = document.createElement('div')
        card.innerHTML = `
         <div class="border-2 rounded-xl p-4">
                <figure>
                    <img src=${item.image} alt="Shoes"
                    class="rounded-xl" />
                </figure>
                <div class="py-2 border-b-2">
                  <p class="text-xl font-bold text-black">${item.pet_name}</p>
                    <ul class="my-2">
                       <li class="flex items-center gap-1">
                          <img src="https://img.icons8.com/?size=48&id=85067&format=png" class="w-4 h-4"/>
                           Breed: ${item.breed}
                       </li>
                       <li class="flex items-center gap-1">
                          <img src="https://img.icons8.com/?size=48&id=4p2G9EBQbqA4&format=png" class="w-4 h-4"/>
                           Birth: ${!item.date_of_birth || ["null"].includes(item.date_of_birth) ? "Not Available" : (item.date_of_birth)}
                       </li>
                       <li class="flex items-center gap-1">
                           <img src="https://img.icons8.com/?size=48&id=6vWA99ikHpCe&format=png" class="w-4 h-4"/>
                           Gender: ${item.gender}
                       </li>
                       <li class="flex items-center gap-1">
                          <img src="https://img.icons8.com/?size=48&id=85801&format=png" class="w-4 h-4"/>
                           Price: ${item.price}
                       </li>
                    </ul>
                </div>
                <div class="flex justify-around items-center mt-2 gap-1">
                   <p onclick="likeImgFetch('${item.image}')" class="border-2 p-1 rounded-lg cursor-pointer hover:bg-green-800 hover:text-white">
                      <span><img src="https://img.icons8.com/?size=48&id=3iSDu4wTLpw2&format=gif&color=f7f7f7" class="w-6 h-6 object-contain"/></span>
                   </p>
                   <span id="count-disabled" onclick="adobtFunction(this)" class="border-2 font-bold text-green-800 py-1 px-2 rounded-lg cursor-pointer hover:bg-green-800 hover:text-white">Adopt</span>
                   <span onclick="detailsBtnFetch('${item.petId}')" class="border-2 font-bold text-green-800 py-1 px-2 rounded-lg cursor-pointer hover:bg-green-800 hover:text-white">Details</span>
                </div>
         </div>
        `;
        allPetsContainer.append(card)
    })

    // sort 
    document.getElementById('sort-price').addEventListener('click', function () {
        sortFunction(allPets)
    })
}


const spinner2 = () => {
    document.getElementById('spinner').classList.remove('hidden')
    document.getElementById('body').classList.add('hidden')
    setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden')
        document.getElementById('body').classList.remove('hidden')
    }, 2000)
}

const spinner = () => {
    document.getElementById('spinner').classList.remove('hidden')
    document.getElementById('main').classList.add('hidden')
    setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden')
        document.getElementById('main').classList.remove('hidden')
    }, 2000)
}

spinner()




btnFetch();
allPetsFetch();