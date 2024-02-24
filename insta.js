const datas = {
    "main": [
        {
            "id": "adventureseeker",
            "username": "john_doe",
            "dp_image": "https://randomuser.me/api/portraits/men/2.jpg",
            "name": "John Doe",
            "post_title": "Nature's beauty",
            "post_image": "https://picsum.photos/id/1018/200/300",
            "likes": 256
        },
        {
            "id": 2,
            "username": "jane_smith",
            "dp_image": "https://randomuser.me/api/portraits/men/4.jpg",
            "name": "Jane Smith",
            "post_title": "Exploring the city",
            "post_image": "https://picsum.photos/id/102/200/300",
            "likes": 487
        },
        {
            "id": 3,
            "username": "sam_wilson",
            "dp_image": "https://randomuser.me/api/portraits/women/7.jpg",
            "name": "Sam Wilson",
            "post_title": "Chasing sunsets",
            "post_image": "https://picsum.photos/id/1020/200/300",
            "likes": 102
        },
        {
            "id": 4,
            "username": "lisa_jones",
            "dp_image": "https://randomuser.me/api/portraits/women/1.jpg",
            "name": "Lisa Jones",
            "post_title": "Foodie adventures",
            "post_image": "https://picsum.photos/id/1021/200/300",
            "likes": 754
        },
        {
            "id": 5,
            "username": "alex_smith",
            "dp_image": "https://randomuser.me/api/portraits/men/6.jpg",
            "name": "Alex Smith",
            "post_title": "Morning coffee",
            "post_image": "https://picsum.photos/id/1022/200/300",
            "likes": 632
        },
        {
            "id": 6,
            "username": "emily_davis",
            "dp_image": "https://randomuser.me/api/portraits/women/5.jpg",
            "name": "Emily Davis",
            "post_title": "Beach vibes",
            "post_image": "https://picsum.photos/id/1023/200/300",
            "likes": 315
        },
        {
            "id": 7,
            "username": "mike_anderson",
            "dp_image": "https://randomuser.me/api/portraits/men/10.jpg",
            "name": "Mike Anderson",
            "post_title": "Fitness journey",
            "post_image": "https://picsum.photos/id/1024/200/300",
            "likes": 918
        },
        {
            "id": 8,
            "username": "sara_jackson",
            "dp_image": "https://randomuser.me/api/portraits/men/12.jpg",
            "name": "Sara Jackson",
            "post_title": "Artistic expressions",
            "post_image": "https://picsum.photos/id/1025/200/300",
            "likes": 524
        },
        {
            "id": 9,
            "username": "ryan_miller",
            "dp_image": "https://randomuser.me/api/portraits/men/10.jpg",
            "name": "Ryan Miller",
            "post_title": "City skyline",
            "post_image": "https://picsum.photos/id/1026/200/300",
            "likes": 213
        },
        {
            "id": 10,
            "username": "olivia_brown",
            "dp_image": "https://randomuser.me/api/portraits/men/12.jpg",
            "name": "Olivia Brown",
            "post_title": "Fashion",
            "post_image":"https://picsum.photos/id/1027/200/300",
            "likes": 409
        },
        {
            "id": 11,
            "username": "michael_wilson",
            "dp_image": "https://randomuser.me/api/portraits/men/14.jpg",
            "name": "Michael Wilson",
            "post_title": "Pet love",
            "post_image": "https://picsum.photos/id/1028/200/300",
            "likes": 156
        },
        {
            "id": 12,
            "username": "emma_white",
            "dp_image": "https://randomuser.me/api/portraits/men/16.jpg",
            "name": "Emma White",
            "post_title": "Countryside charm",
            "post_image": "https://picsum.photos/id/1029/200/300",
            "likes": 732
        },
        {
            "id": 13,
            "username": "david_brown",
            "dp_image": "https://randomuser.me/api/portraits/men/17.jpg",
            "name": "David Brown",
            "post_title": "Road trip memories",
            "post_image": "https://picsum.photos/id/103/200/300",
            "likes": 845
        },
        {
            "id": 14,
            "username": "jessica_martin",
            "dp_image": "https://randomuser.me/api/portraits/men/18.jpg",
            "name": "Jessica Martin",
            "post_title": "Bookworm corner",
            "post_image": "https://picsum.photos/1100/1200",
            "likes": 321
        },
        {
            "id": 15,
            "username": "jacob_smith",
            "dp_image": "https://randomuser.me/api/portraits/men/19.jpg",
            "name": "Jacob Smith",
            "post_title": "Adventure awaits",
            "post_image": "https://picsum.photos/id/1031/200/300",
            "likes": 569
        }
    ]
};

const data1 = document.querySelector(".maincontent");
const data2 = document.querySelector(".dpimg")
const data3 = document.querySelector(".suggest")

datas.main.forEach((item1)=>{
    data2.innerHTML +=`
    <div class="main31">
                        <img src="${item1.dp_image}" alt>
                  </div>
    `
})

datas.main.forEach((item2)=>{
    data3.innerHTML +=`
    <div class="main3main follow">
    <div class="main3p1">
        <img src="${item2.dp_image}" alt>
    </div>
    <div class="main3name">
        <h3>${item2.username}</h3>
        <h3 class="usernamep">Suggested for you</h3>
    </div>
    <div class="switch">
        <h3>follow</h3>
    </div>
</div>
`
})

datas.main.forEach((item)=>{
    data1.innerHTML += `
    <div class="username">
        <div class="username1">
            <div class="maindp">
                <img src="${item.dp_image}" alt>
            </div>
            <div class="heading">
                <h3>${item.username}</h3>
            </div>
        </div>
        <div class="username2">
            <h3>...</h3>
        </div>
    </div>
    <div class="mainimg">
        <img src="${item.post_image}" alt>
    </div>
    <div class="interaction">
    <div class="likes">
    <div class="like icon2">
        <i class="fa-solid fa-heart redcolor"></i>
    </div>
            <div class="comment icon2">
                <i class="fa-regular fa-comment"></i>
            </div>
            <div class="share icon2">
                <i class="fa-solid fa-square-arrow-up-right"></i>
            </div>
        </div>
        <div class="saved icon2">
            <i class="fa-regular fa-bookmark"></i>
        </div>
    </div>
    <div class="title">
        <div class="title1">
            <h3>${item.likes} likes</h3>
        </div>
        <div class="title2">
            <h3>${item.post_title}</h3>
        </div>
        <div class="comments">
            <div class="add">
                <h4>Add a comment...</h4>
            </div>
            <div class="happy">
                <i class="fa-regular fa-face-smile"></i>
            </div>
        </div>
    </div>`;
});

const heart = document.querySelector(".redcolor");

heart.addEventListener('click', function() {
    heart.style.color = "red"
});
