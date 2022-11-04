document.addEventListener('DOMContentLoaded',() =>{
    const elementos = document.querySelectorAll('.carousel');
    M.Carousel.init(elementos, {
        duration:20,
        dist:-200,
        shift:1,
        padding:1,
        numVision: 4,
        indicators: true,
        noWrap:true,
    })
});
