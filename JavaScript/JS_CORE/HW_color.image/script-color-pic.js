let h1 = document.querySelector('.color');
let wrBlocks = document.querySelector('.colorBlocks')
h1.addEventListener('click',()=>{
    wrBlocks.style.display = 'grid';
    wrPictures.style.display = 'none';

})


let h2 = document.querySelector('.picture');
let wrPictures = document.querySelector('.pictures')
h2.addEventListener('click',()=>{
    wrPictures.style.display = 'grid';
    wrBlocks.style.display = 'none';

})

let blocks2 = document.querySelectorAll('.block2');
let BG = [
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    'https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://www.myfitness.ee/wp-content/uploads/2016/05/nature-wallpaper-07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg',
    'https://sferaglass.com/storage/images/ZCyNe6QvEf.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJrsnfxCeHArU4QxIxYLVcx69EjchHCEtmUQ&usqp=CAU',
    'https://production-wordpress.unep-wcmc.org/content//uploads/2021/11/AdobeStock_291451528-1-scaled.jpeg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/279314888.jpg?k=634792d1c74f7c16f71502c6e4f2dd83e56c5745965ea94c3205046ca4736217&o=&hp=1',
    'https://cdn.futura-sciences.com/buildsv6/images/wide1920/1/f/3/1f3a0c73fe_50143651_496.jpg',
]
blocks2.forEach((item,i)=>{
    item.addEventListener('click', ()=>{
        document.body.style.backgroundImage = 'url(' + BG[i] + ')';

    })
})
// for (let i=0;i<=blocks2.length;i++){
//     blocks2[i]?.addEventListener('click', ()=>{
//         document.body.style.backgroundImage = 'url(' + BG[i] + ')';
//     })
// }


let blocks1 = document.querySelectorAll('.block');
let color = ['aqua','brown','green','lightgreen','gray','red','blue','blueviolet','olive']

// for (let i=0;i<=blocks1.length;i++){
//     blocks1[i].addEventListener('click', ()=>{
//         document.body.style.background = color[i];
//     })
// }
blocks1.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        document.body.style.background = color[i];

    })
})
// for (let i=0;i<=blocks1.length;i++){
//     blocks1[i]?.addEventListener('click', ()=>{
//         document.body.style.background = color[i];
//     })
// }