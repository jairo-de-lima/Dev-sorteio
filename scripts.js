
const sort = document.querySelector('.sort')
const div = document.querySelector('.numberSort')


function generateNumber() {

    const minValue = Math.ceil(document.querySelector('.input-min').value)
    const maxValue = Math.floor(document.querySelector('.input-max').value)


    if (maxValue == "") {
        alert('introduza valores')
        return
    }


    div.style.visibility = "visible"
   
    
    const result = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    sort.innerHTML = result

}


div.addEventListener('click', hide)

function hide() {
    if (div.style.visibility == 'visible') {
        div.style.visibility = 'hidden';
    } else {
        div.style.visibility = 'visible';
    }
}







