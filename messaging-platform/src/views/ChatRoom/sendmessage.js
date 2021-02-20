$('#uploadfile').bind('change', function(e){
    var data = e.originalEvent.target.files[0];
    readThenSendFile(data);      
});

function readThenSendFile(data){

    var reader = new FileReader();
    reader.onload = function(evt){
        var msg ={};
        msg.username = username;
        msg.file = evt.target.result;
        msg.fileName = data.name;
        socket.emit('base64 file', msg);
    };
    reader.readAsDataURL(data);
}