const categories = document.querySelector('.categories')
const projectsContainer = document.querySelector('.projects')
const projects = document.querySelectorAll('.project')

categories.addEventListener('click',(e) => {
    const filter = e.target.dataset.category
    // console.log(filter)
    if(filter == null){
        return;
    }
    activeSelection(e.target)
    filterProjects(filter)
})

function activeSelection(target){
    const active = document.querySelector('.category--selected')
    active.classList.remove('category--selected')
    target.classList.add('category--selected')
}



// 요소.dataset.type
function filterProjects(filter){
    projects.forEach((project) => {
        if(filter == 'all' || filter == project.dataset.type) {
            project.style.display = 'block'
        }else{
            project.style.display = 'none'
        }
    })

    projectsContainer.classList.add('anim-out')
    setTimeout(() => {
        projectsContainer.classList.remove('anim-out')
    }, 300)
}














//모르겠따
// 요소.dataset.type
//data-type="front-end"
// const data_type = document.querySelector('.data-type')


// data_type.addEventListener('click',(e) => {
//     const data_type = e.target.dataset.data_type
//     console.log(data_type)
//     if(data_type == null){
//         return;
//     }
//     activeSelection(e.target)
// })


// function activeSelection(target){
//     const active = document.querySelector('.data-type')
//     console.log(data_type)
//     // 널이라ㅠㅠ              
//     // active.classList.remove('data-type')
//     target.classList.add('data-type')
// }