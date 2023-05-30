function parentN(outerWrapper){
    outerWrapper.firstElementChild.style.background = "green"
}


function fchild(outerWrapper){
    outerWrapper.firstElementChild.firstElementChild.style.background = "yellow"
}

function nxtSibl(outerWrapper){
    outerWrapper.firstElementChild.firstElementChild.nextElementSibling.style.background = "red"
}