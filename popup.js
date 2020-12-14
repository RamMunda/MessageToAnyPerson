MyInterval=setInterval(myFunction,1000);


function myFunction(){
    console.log("welcome");

    if(document.querySelector(".group_name")){
        document.querySelector(".group_name").addEventListener('keyup',function(){
            chrome.tabs.query({}, tabs => {
                tabs.forEach(tab => {
                console.log("ghghh");
                var groupName = document.querySelector(".group_name").value;
                console.log(groupName);
                chrome.tabs.sendMessage(tab.id, {groupName:groupName,changeTxt:"changetxt"});
              });
            });  
        });
    }
    document.getElementById("button1").addEventListener("click", abc,{once:true});
}


function abc(){
    chrome.tabs.query({}, tabs => {
        tabs.forEach(tab => {
        var groupName = document.querySelector(".group_name").value;
        var message = document.querySelector(".message").value;
        
        var data = {
            groupName : groupName,
            message : message
        }
        chrome.tabs.sendMessage(tab.id, {msg:data});
      });
    });
}

