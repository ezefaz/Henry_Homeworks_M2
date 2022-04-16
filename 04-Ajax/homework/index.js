var URL = `http://localhost:5000/amigos`;

$('#boton').click(function() {
    $('#lista').empty();
    $.get(`${URL}`, function(friends) { // las comillas invertidas son para que le pueda interpolar variables.
        console.log(friends);
        friends.forEach(e => {
            $('#lista').append(`<li id="${e.id}">${e.name} <button id="${e.id}" onclick"deleteFriend(${e.id})">X</button></li>`)
        })
    }) 
}); 

$('#search').click(function() {

    let id = $('#input').val();

    if(id) {
        $.get(`${URL}/${id}`, function (friend) {
            console.log(friend);
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