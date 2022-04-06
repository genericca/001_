const left = document.querySelector(".left");
const right = document.querySelector(".rigth");
const picContainer = document.querySelector(".pic-container");
const profilePic = document.querySelector(".profile-pic");
const userName = document.querySelector(".user-name");
const title = document.querySelector(".title");
const comment = document.querySelector(".comment");
const surprise = document.querySelector(".surprise-button");
const girls = [
    {
        name : "Kafuu Chino",
        title : "Barista",
        comment : "Lorem ipsum dolor sit amet consectetur adipisic perferendis voluptatibus magni ex eaque! Dignissimos velit assumenda consectetur expedita quae totam magni vero qui.",
        imageLink : "images/gochi_0.png",
        color : "rgb(106, 182, 233)"
    }, 
    {
        name : "Kirima Sjaro",
        title : "Various", 
        comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum aliquid vsicing elit. Minus eum aliquid voluptatum esoluptatum esse dolorum fugit perferendis voluptatibus magni ex eaque! Dignissimos velit assumenda consectetur expedita quae totam magni vero qui.",
        imageLink : "images/gochi_2.png",
        color : "rgb(139, 213, 167)"
    },
    {
        name : "Ujimatsu Chiya", 
        title : "大和撫子",
        comment : "Lorem ipsum dolor sit aquid voluptatum esse dolorum fugit perferendis voluptatioluptatum esse dolorum fugit perferendis voluptatibus magni ex eaque! Dignissimos velit assumenda consectetur expedita quae totam magni vero qui.",
        imageLink : "images/gochi_1.png",
        color : "rgb(213, 202, 139)"
    },
    {
        name : "Hoto Cockoa",
        title : "International Barista Lawyer",
        comment : "Lorem ipsum dolor sit amet consectetur adipise dolorum fugit perferendis voluptatibus magni ex eaque! Dignissimos velit assumenda consectetur expedita quae totam magni vero qui.",
        imageLink : "images/gochi_5.png",
        color : "violet"
    },
    {
        name : "Megumi Natsu", 
        title : "Nakayoshi", 
        comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum aliquid voluptatum esse dolorum fugit perferendis voluptatibus magni ex eaque! Dignissimos velit assumenda consectetur expedita quae totam magni vero qui.",
        imageLink : "images/gochi_3.png",
        color : "pink"
    },
    {
        name : "Jouga Maya", 
        title : "Imouto", 
        comment : "Lorem ipsum dolor sit ambus magni ex eaque! Dignissimos velit assumenda consectetur expedita quae totam magni vero qui.",
        imageLink : "images/gochi_4.png",
        color : "purple"
    }
];
let index;

index = 0;

left.addEventListener("click", () => {
    index = (index + 1) % girls.length;
    switch_girl();
});

right.addEventListener("click", () => {
    index--;
    if (index < 0)
        index = girls.length - 1;
    switch_girl();
});

surprise.addEventListener("click", () => {
    index = ~~(Math.random() * girls.length);
    switch_girl();
});

function switch_girl() {
    profilePic.src = `${girls[index].imageLink}`;
    userName.innerText = girls[index].name;
    title.innerText = girls[index].title;
    comment.innerText = girls[index].comment;
    picContainer.style.setProperty("--image-bg", girls[index].color);
    console.log(picContainer);
}

switch_girl();