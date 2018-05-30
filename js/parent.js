var starter=document.querySelector("#start");
var receiver;
var handshaking=false;
starter.onclick = (e)=> {
    var message = document.getElementById('message');
    starter.style.display = 'none';
    receiver = window.open("http://XXX---yourDomain--XXX/child.html");
    var btn = document.getElementById('send');
    var sendMessage = () => {
        receiver.postMessage(message.value || "Empty", 'http://XXX---yourDomain--XXX');
        message.value = "";
    }

    btn.addEventListener('click', sendMessage);
    // code for recived message from tab 2

        var recivedMsg = document.getElementById('recivedMsgBox');
        var receiveMessage =(e) => {
            if(e.data=="handshakingcallback"){
                handshaking=true;
                var newLI = document.createElement('li');
                newLI.appendChild(document.createTextNode("handshaking Done!"));
                recivedMsg.appendChild(newLI);
            }else{
            if(handshaking){
                var newLI = document.createElement('li');
                newLI.appendChild(document.createTextNode(`Message Received from tab2   ${e.data}`));
                recivedMsg.appendChild(newLI);
            }else{
                alert("Wait for Child window ready")
            }
    }
 }
    window.addEventListener('message', receiveMessage);
}
