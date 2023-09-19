// Items
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "Breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke milkshake wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Diner Double",
        category: "Lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `Vaporware IPhone numblecore selvage raw denim slow-carb laggings gochujanj helvetican man braid jianbing. marfa thundercats.`,
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        category: "Shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `Omabucha chiliwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Country Delight",
        category: "Breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra sanckwake pork belly shoreditch, prism austin milkshake traffaut.`,
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "Lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzan vegan pabst bicyle rights kickstarter pinterest meditation farm-to-table 90's pop-up.`,
    },
    {
        id: 6,
        title: "Oreo Dream",
        category: "Shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethica bulb, palo santo craft chia heirioom IPhone everyday.`,
    },
    {
        id: 7,
        title: "Bacon Overflow",
        category: "Breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc:  `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird.`,
    },
    {
        id: 8,
        title: "American Classic",
        category: "Lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut.`,
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        category: "Shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Bison Steak",
        category: "Dinner",
        price: 32.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },

];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector('.btn-container')
const filterBtns = document.querySelectorAll('.filter-btn')


window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values
    },
    ['All']
  );
    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    })
    .join("")
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn')

    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
            //    console.log(menuItems.category);
            if (menuItem.category === category){
                return menuItem;
            }
            });
            // console.log (menuCategory);
            if (category === "All"){
                displayMenuItems(menu);
            }else{
             displayMenuItems(menuCategory);
            }
        });
    });
});



function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        // console.log(item); 
    return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}"/>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};