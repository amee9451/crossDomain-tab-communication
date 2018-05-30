window.onload = ()=> {
    var message = document.getElementById('message');
    var recivedMsg = document.getElementById('recivedMsgBox');
    var receiveMessage = (e)=> {
        var newLI = document.createElement('li');
        newLI.appendChild(document.createTextNode(`Message Received from tab1   ${e.data}`));
        recivedMsg.appendChild(newLI);
    }
    window.addEventListener('message', receiveMessage);



    // code for recived message from tab 1
    var btn = document.getElementById('send');
    var sendMessage = ()=> {
        opener.postMessage(message.value || "Empty", '*');
        message.value="";
    }
    btn.addEventListener('click', sendMessage);


    var li = document.createElement('li')
    li.appendChild(document.createTextNode(`Handshake Done from tab1`));
    recivedMsg.appendChild(li);
    opener.postMessage("handshakingcallback", '*');
}
