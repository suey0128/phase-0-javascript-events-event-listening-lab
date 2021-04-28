
const input = getElementById('input')

/*
function addingEventListener() {
    input.addEventListener('click',function(){
        alert('I was clicked!');
    })
}

*/


function addingEventListener (){
    function enAlert (){
        alert('I was clicked!');
    }
    input.addEventListener('click', enAlert);
}

