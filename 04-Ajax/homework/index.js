var URL = `http://localhost:5000/amigos`;

$('#boton').click(function() {
    let lista = $('#lista');
    lista.empty();
    $.get(`${URL}`, function(friends) { // las comillas invertidas son para que le pueda interpolar variables.
        console.log(friends);
        friends.forEach(e => {
            $('#lista').append(`<li id="${e.id}">${e.name} X </li>`);
        })
    }) 
}); 

/* FETCH

let buttonSearch = document.getElementById("search").addEventListener("click", getFriends);
let searchBar = document.getElementById("input");
let amigoSpan = document.getElementById("amigo");


function getFriends () {
    fetch(`${URL}/${searchBar.value}`);
.then(res => res.json());
.then(amigo => amigoSpan.innerText = amigo.name);

}

*/

$('#search').click(function() {

    let id = $('#input').val();

    if(id) {
        $.get(`${URL}/${id}`, function (friend) {
            $('#amigo').text(`el nombre de mi amigo es: ${friend.name}`);
            $('#input').val("");
        })
   } else {
    $('#amigo').text('tenes que ingresar un ID');
   }
});

let deleteFriend = function() {
    let id = $('#inputDelete').val();
    let friend;

    if(id) {
        $.get(`${URL}/${id}`, function(f) {
            friend = f;
        });
        $.ajax({ 
            url: `${URL}/${id}`,
            type: "DELETE",
            success: function(){
                $('#success').text(`Tu amigo, ${friend.name} fue eliminado con éxito`);
                $('#inputDelete').val("");
                showFriend();
            }
        })
    } else {
        $('success').text('Tenes que ingresar un ID');
    }
};

$('#delete').click(deleteFriend);

/* AXIOS

    let deleteInput = document.getElementById('inputDelete')
    let deleteButton = document.getElementById('delete').addEventListener("click", deleteFriend(id))
    let span = document.getElementById('success')


function deleteFriend(id) {
    axios.delete(`${URL}/${id}`)
    .then(res => {
        span.innerText = "Amigo eliminado exitosamente"
        deleteInput.value = ""
    })
}


*/