let users = [
  {name: "amisha rathore", pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg", bio: "silent chaos in a loud world 🖤 | not for everyone"},
  {name: "aryan mehta", pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800", bio: "Living one day at a time ✨"},
  {name: "riya sharma", pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800", bio: "Dreamer | believer | achiever 💫"},
  {name: "daksh singh", pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800", bio: "Calm mind, fierce soul 🔥"},
  {name: "aman patil", pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", bio: "Be real, not perfect 🌸"},
  {name: "raj verma", pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", bio: "Work in silence, let success speak 😎"},
  {name: "khushi jain", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800", bio: "Smiling through chaos 💕"},
];

let cardsDiv = document.querySelector(".cards");
let noUser = document.querySelector(".no-user");

function showusers(arr) {

  cardsDiv.innerHTML = "";

  if(arr.length === 0){
    noUser.style.display = "block";
    return;
  } else {
    noUser.style.display = "none";
  }

  arr.forEach(user=>{
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("bg-img");
    img.src = user.pic;

    let blur = document.createElement("div");
    blur.classList.add("blurred-layer");
    blur.style.backgroundImage = `url(${user.pic})`;

    let content = document.createElement("div");
    content.classList.add("content");

    let h3 = document.createElement("h3");
    h3.innerText = user.name;

    let p = document.createElement("p");
    p.innerText = user.bio;

    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blur);
    card.appendChild(content);

    card.addEventListener("click",()=>{
        openPopup(user);
    });

    cardsDiv.appendChild(card);
  });
}

showusers(users);

// SEARCH WITH DEBOUNCE
let inp = document.querySelector(".inp");
let timer;

inp.addEventListener("input", function(){
  clearTimeout(timer);

  timer = setTimeout(()=>{

    let value = inp.value.toLowerCase();

    let newUsers = users.filter(user =>
      user.name.toLowerCase().includes(value)
    );

    showusers(newUsers);

  },300); // 300ms debounce
});

// POPUP
let popup = document.querySelector(".popup");
let popupImg = document.querySelector(".popup-img");
let popupName = document.querySelector(".popup-name");
let popupBio = document.querySelector(".popup-bio");
let closeBtn = document.querySelector(".close");

function openPopup(user){
  popup.style.display = "flex";
  popupImg.src = user.pic;
  popupName.innerText = user.name;
  popupBio.innerText = user.bio;
}

closeBtn.addEventListener("click",()=>{
  popup.style.display = "none";
});

popup.addEventListener("click",(e)=>{
  if(e.target === popup) popup.style.display = "none";
});
