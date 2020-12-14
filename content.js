var MyInterval;
var ReturnValue;
MyInterval=setInterval(WAmainfunction,4000);
var currentnotView = [];
var personOnView = [];
var messageOnview = [];
var group_or_personname;
var message;

var g = window.location.href;
var p = new URL(g);

if(p.host=="api.whatsapp.com"){
    setTimeout(()=>{
        var cc = document.querySelector("._36or._2y_c._2z0c._2z07")
        eventFire(cc,"click");
    },2000);
    setTimeout(()=>{
        var kk = document.querySelectorAll("._36or");
        kk.forEach(function(gg){
            if(gg.textContent==="use WhatsApp Web"){
                eventFire(gg,"click");
               
            }
        })
        eventFire(kk,"click");
    },3000);
}
setTimeout(()=>{
    if(document.querySelectorAll("._2FbwG").length==2){
        if(document.querySelectorAll("._2FbwG")[1].textContent){
            eventFire(document.querySelector('span[data-icon="send"]'), 'click');
    
        }
    
    }
},8000)

chrome.runtime.onMessage.addListener(msgObj => {
    if(msgObj.msg){
        if(Boolean(Number(msgObj.msg.groupName))===true){
            group_or_personname = Number(msgObj.msg.groupName);
            console.log(group_or_personname);
            window.location.href = `https://api.whatsapp.com/send/?phone=91${group_or_personname}&text=${msgObj.msg.message}&app_absent=0`;
            setTimeout(()=>{
                eventFire("._36or._2y_c._2z0c._2z07","click");
            },2000);

        }
        else{
            group_or_personname = msgObj.msg.groupName; 
            console.log(group_or_personname);
        }
        window.group_or_personname =window.group_or_personname;
        message = msgObj.msg.message
        window.message = window.message;
        if(typeof group_or_personname==="number"){
            return null;
        }
        const selectPeson_group = (group_or_personname, message) =>{
            var persons = [];
            var chatlist = document.querySelector(".-GlrD._2xoTX");
            var persondata = chatlist.childNodes;
            var searchpreText = document.querySelector(".J3VFH");
            searchpreText.style.display = "none";
           
            var textContainer = document.querySelector("._3FRCZ.copyable-text.selectable-text");
            textContainer.innerHTML = group_or_personname;
    
            
            persondata.forEach(function(data){
                var personsTitles = data.querySelector('._3ko75._5h6Y_._3Whw5');
                    var txtValue = personsTitles.textContent || personsTitles.innerText;
                    var filter = group_or_personname.toUpperCase();
                        if(txtValue.toUpperCase().indexOf(filter) >-1){
                            persons.push(txtValue);
                            if(personsTitles.title==group_or_personname){
                                var titleDiv = data.querySelector('._2kHpK');
                                selectChat(titleDiv, message, disp);
                            }
         
        
                         }
        
                             
                });
                if(persons.length==0){
                    var countTime = 0;
                    var scrollFuncController = [];
                    for(var t=0;t<difference.length;t++){
                        if(difference[t]===group_or_personname){
                            $(document).ready(function() {
                                $('#pane-side').animate({
                                  scrollTop: -(document.querySelector(".-GlrD._2xoTX").offsetHeight),                       
                                }, 1000);
                              persons.push("1");
                              var personFind = [];
                              var chatlist = document.querySelector(".-GlrD._2xoTX");
                              var persondata = chatlist.childNodes;
                            //   using observer 
                              const configure = { attributes: true, childList: true, subtree: true };
                              var observer = new MutationObserver(function(mutations){
                                var hasUpdates = false; 
                                for (var index = 0; index < mutations.length; index++) {
                                     var mutation = mutations[index]; 
                                     if (mutation.type === 'childList' && mutation.addedNodes.length) {
                                          hasUpdates = true; 
                                          break; 
                                       } 
                                   }
                                   // check if childnodes are updating
                                    if (hasUpdates) {
                                        persondata.forEach(function(data){
                                            var personsTitles = data.querySelector('._3ko75._5h6Y_._3Whw5');
                                                var txtValue = personsTitles.textContent || personsTitles.innerText;
                                                var filter = group_or_personname.toUpperCase();
                                                    if(txtValue.toUpperCase().indexOf(filter) >-1){
                                                        personFind.push(txtValue);
                                                        if(personsTitles.title==group_or_personname){
                                                            // persons.push("1");
                                                            scrollFuncController.push("1");
                                                            var titleDiv = data.querySelector('._2kHpK');
                                                            selectChat(titleDiv, message, disp);
                                                            return null;
                                                        }
                                                        else{
    
                                                        }
                                     
                                    
                                                     }
                                    
                                                         
                                        });
                                        if(personFind.length==1){
                                           observer.disconnect();
                                        }
                                    } 
                                   });
                                
                                   observer.observe(chatlist, configure);   
                            });                   
                        }
                        else{
    
                        }
                        countTime = countTime + 1;
                    }
                    if(countTime==difference.length){
                        if(scrollFuncController.length==0){
                            Scrolldown();
                        }
                    }      
    
                }
    
                // if person is not in above view port then try to scroll down and find group name and send message
                function Scrolldown(){
                        $(document).ready(function() {
                              $('#pane-side').animate({
                                scrollTop: document.querySelector(".-GlrD._2xoTX").offsetHeight - document.getElementById('pane-side').offsetHeight,                       
                              }, 2000);                                                                                         
        
                            });
                    
                }
                if(persons.length===0){
                    $(document).ready(function() {
                          $('#pane-side').animate({
                            scrollTop: document.querySelector(".-GlrD._2xoTX").offsetHeight - document.getElementById('pane-side').offsetHeight,                       
                          }, 2000);
                          var personFind = [];
                          var chatlist = document.querySelector(".-GlrD._2xoTX");
                          var persondata = chatlist.childNodes;
                        //   using observer 
                          const configure = { attributes: true, childList: true, subtree: true };
                          var observer = new MutationObserver(function(mutations){
                            var hasUpdates = false; 
                            for (var index = 0; index < mutations.length; index++) {
                                 var mutation = mutations[index]; 
                                 if (mutation.type === 'childList' && mutation.addedNodes.length) {
                                      hasUpdates = true; 
                                      break; 
                                   } 
                               }
                               // check if childnodes are updating
                                if (hasUpdates) {
                                    persondata.forEach(function(data){
                                        var personsTitles = data.querySelector('._3ko75._5h6Y_._3Whw5');
                                            var txtValue = personsTitles.textContent || personsTitles.innerText;
                                            var filter = group_or_personname.toUpperCase();
                                                if(txtValue.toUpperCase().indexOf(filter) >-1){
                                                    personFind.push(txtValue);
                                                    if(personsTitles.title==group_or_personname){
                                                        var titleDiv = data.querySelector('._2kHpK');
                                                        selectChat(titleDiv, message, disp);
                                                    }
                                 
                                
                                                 }
                                
                                                     
                                    }); 
                                    if(personFind.length==1){
                                       observer.disconnect();
                                    }
                                } 
                               });
                            
                               observer.observe(chatlist, configure);                                                                                         
    
                        });
                
            }
            if(persons.length===0){
                if(typeof group_or_personname === Number){
                }
            }
 
         } 
         selectPeson_group(group_or_personname, message);

    }

        
        
});

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var lastMessageOnChat = false;
var ignoreLastMsg = {};
var elementConfig = {
    "chats": [0, 0, 5, 2, 0, 3, 0, 0, 0],
    "chat_icons": [0, 0, 1, 1, 1, 0],
    "chat_title": [0, 0, 1, 0, 0, 0, 0],
    "chat_lastmsg": [0, 0, 1, 1, 0, 0],
    "chat_active": [0, 0],
    "selected_title": [0, 0, 5, 3, 0, 1, 1, 0, 0, 0, 0]
};

const jokeList = [
    `
    Husband and Wife had a Fight.
    Wife called Mom : He fought with me again,
    I am coming to you.
    Mom : No beta, he must pay for his mistake,
    I am comming to stay with U!`,

    `
    Husband: Darling, years ago u had a figure like Coke bottle.
    Wife: Yes darling I still do, only difference is earlier it was 300ml now it's 1.5 ltr.`,

    `
    God created the earth, 
    God created the woods, 
    God created you too, 
    But then, even God makes mistakes sometimes!`,

    `
    What is a difference between a Kiss, a Car and a Monkey? 
    A kiss is so dear, a car is too dear and a monkey is U dear.`
]


	// Get random value between a range
	function rand(high, low = 0) {
		return Math.floor(Math.random() * (high - low + 1) + low);
	}
    
    function getLastMsg(){
		var messages = document.querySelectorAll('.msg');
		var pos = messages.length-1;
		
		while (messages[pos] && (messages[pos].classList.contains('msg-system') || messages[pos].querySelector('.message-in'))){
			pos--;
			if (pos <= -1){
				return false;
			}
		}
		if (messages[pos] && messages[pos].querySelector('.selectable-text')){
			return messages[pos].querySelector('.selectable-text').innerText.trim();
		} else {
			return false;
		}
	}
    
    function getUnreadChats(){
		var unreadchats = [];
        var chats = getElement("chats");
		if (chats){
			chats = chats;
			for (var i in chats){
				if (!(chats[i] instanceof Element)){
					continue;
				}
                var icons = getElement("chat_icons", chats[i]);
				if (!icons){
					continue;
				}
				for (var j in icons){
					if (icons[j] instanceof Element){
						if (!(icons[j].childNodes[0].getAttribute('data-icon') == 'muted' || icons[j].childNodes[0].getAttribute('data-icon') == 'pinned')){
							unreadchats.push(chats[i]);
							break;
						}
					}
				}
			}
        }
		return unreadchats;
	}
	
	function didYouSendLastMsg(){
		var messages = document.querySelectorAll('.msg');
		if (messages.length <= 0){
			return false;
		}
		var pos = messages.length-1;
		
		while (messages[pos] && messages[pos].classList.contains('msg-system')){
			pos--;
			if (pos <= -1){
				return -1;
			}
		}
		if (messages[pos].querySelector('.message-out')){
			return true;
		}
		return false;
	}

	// Call the main function again
	const goAgain = (fn, sec) => {
		// const chat = document.querySelector('div.chat:not(.unread)')
		// selectChat(chat)
		setTimeout(fn, sec * 1000)
    }
    


	// Send a message
	const sendMessage = (chat, message) => {
		//avoid duplicate sending
		var title;
		if (chat){          
            title = getElement("chat_title",chat);
		} else {
            title = getElement("selected_title").title;
            
		}
        ignoreLastMsg[title] = message;
		messageBox = document.querySelectorAll("[contenteditable='true']")[1];
        //add text into input field
        messageBox.innerHTML = message.replace(/  /gm,'');
		//Force refresh
        event = document.createEvent("UIEvents");
		event.initUIEvent("input", true, true, window, 1);
		messageBox.dispatchEvent(event);

		//Click at Send Button
		eventFire(document.querySelector('span[data-icon="send"]'), 'click');
        

    
		
	}


function sendMessages () {
  var evt = new Event('input', {
    bubbles: true
  });
  
  var input = getElementByXpath("//*[@id=\"main\"]/footer/div[1]/div[2]/div/div[2]");
  input.innerHTML = "this is a test";
  input.dispatchEvent(evt);

  getElementByXpath("//*[@id=\"main\"]/footer/div[1]/div[3]/button").click();
}

// callback function call after code complition in select function
function disp(chat, message){ 
    start(chat, message);

    console.log('This must be printed after code complition'); 
}

// selectchat function to show chat box
const selectChat = (chat, message, callback) => {
    const title = getElement("chat_title",chat);
    eventFire(chat.firstChild.firstChild, 'mousedown');
    // const loopFewTimes = () => {
    //     setTimeout(() => {
    //         console.log("titeElement working...");
    //         const titleMain = getElement("chat_title",chat);
    //         if (titleMain !== undefined && titleMain != title){
    //             console.log('not yet');
    //             return loopFewTimes();
    //         }

    //     }, 300);
    // }

    // loopFewTimes();
    setTimeout(()=>sendMessage(chat,message),3000);
    setTimeout(()=>callback(chat,message),3000);
    
}

const eventFire = (el, etype) => {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(etype, true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
}

function getElement(id, parent){
    if (!elementConfig[id]){
        return false;
    }
    var elem = !parent ? document.body : parent;

    var elementArr = elementConfig[id];
    elementArr.forEach(function(pos) {
        if (!elem.childNodes[pos]){
            return false;
        }

         elem = elem.childNodes[pos];

    });
    return elem;
}

const start = (_chats,message) => {
    // get next unread chat
    const chats = _chats || getUnreadChats();
    const chat = chats;
    
    var processLastMsgOnChat = false;
    var lastMsg;
    
    if (!lastMessageOnChat){
        if (false === (lastMessageOnChat = getLastMsg())){
            lastMessageOnChat = true; //to prevent the first "if" to go true everytime
        } else {
            lastMsg = lastMessageOnChat;

        }
    } else if (lastMessageOnChat != getLastMsg() && getLastMsg() !== false && !didYouSendLastMsg()){
        lastMessageOnChat = lastMsg = getLastMsg();

        processLastMsgOnChat = true;
    }
    
    if (!processLastMsgOnChat && (chats.length == 0 || !chat)) {
        console.log(new Date(), 'nothing to do now... (1)', chats.length, chat);
        return goAgain(start, 3);
    }

    // get infos
    if (!processLastMsgOnChat){
        title = getElement("chat_title",_chats);
        lastMsg = message;
        // lastMsg = (getElement("chat_lastmsg", chat) || { innerText: '' }).title.replace(/[\u2000-\u206F]/g, ""); //.last-msg returns null when some user is typing a message to me

    } else {
        title = getElement("selected_title").title;
    }
    // avoid sending duplicate messaegs
    // if (ignoreLastMsg[title] && (ignoreLastMsg[title]) == lastMsg) {
    //     console.log(new Date(), 'nothing to do now... (2)', title, lastMsg);
    //     return goAgain(() => { start(chats, cnt + 1) }, 0.1);
    // }

    // what to answer back?
    let sendText;
    if (lastMsg.toUpperCase().indexOf('@HELP') > -1){
        sendText = `
            Cool ${title}! Some commands that you can send me:

            1. *@TIME*
            2. *@JOKE*`
    }

    if (lastMsg.toUpperCase().indexOf('@TIME') > -1){
        sendText = `
            Don't you have a clock, dude?

            *${new Date()}*`;
    }

    if (lastMsg.toUpperCase().indexOf('@JOKE') > -1){
        sendText = jokeList[rand(jokeList.length - 1)];
    }
    
    // that's sad, there's not to send back...
    if (!sendText) {
        ignoreLastMsg[title] = lastMsg;
        console.log(new Date(), 'new message ignored -> ', title, lastMsg);
        // return goAgain(() => { start(chats, cnt + 1) }, 0.1);
        return null;
    }

    console.log(new Date(), 'new message to process, uhull -> ', title, lastMsg);

    // select chat and send message
    var cnt = 0;
    if (!processLastMsgOnChat){
        // selectChat(chat, () => {
            sendMessage(chat, sendText.trim(), () => {
                goAgain(() => { start(chats, cnt + 1) }, 1);
            });
        // })
    } else {
        sendMessage(null, sendText.trim(), () => {
            goAgain(() => { start(chats, cnt + 1) }, 1);
        });
    }
}

function WAmainfunction(){
		            var chatlist = document.querySelector(".-GlrD._2xoTX");
            if(chatlist){            
                var persondata = chatlist.childNodes;
                //   using observer 
                const configure = { attributes: true, childList: true, subtree: true };
                var observer = new MutationObserver(function(mutations){
                  var hasUpdates = false; 
                  for (var index = 0; index < mutations.length; index++) {
                       var mutation = mutations[index]; 
                       if (mutation.type === 'childList' && mutation.addedNodes.length) {
                            hasUpdates = true; 
                            break; 
                         } 
                     }
                     if(hasUpdates){
                        persondata.forEach(function(data){
                            var personsTitles = data.querySelector('._3ko75._5h6Y_._3Whw5');
                                var txtValue = personsTitles.textContent || personsTitles.innerText;
                                var count = 0;
                                var d = personOnView.length;
                                for(var k=0;k<d;k++){
                                    if(personOnView[k]===txtValue){
                                        count = count + 1;
                                    }

                                }
                                if(count==0){
                                    personOnView.push(txtValue);

                                }
                                
                        });
                     }
                
                    });
                    observer.observe(chatlist, configure);                                                                                         

            }
            var ViewOnPerson = [];
            var chatlist = document.querySelector(".-GlrD._2xoTX");
            if(chatlist){
                var persondata = chatlist.childNodes;
                persondata.forEach(function(data){
                    var personsTitles = data.querySelector('._3ko75._5h6Y_._3Whw5');
                    var txtValue = personsTitles.textContent || personsTitles.innerText;
                    ViewOnPerson.push(txtValue);
                    
                });
            }
         
   var difference = personOnView.filter(x => ViewOnPerson.indexOf(x) === -1);
   window.difference = difference;

   $("#pane-side").on("scroll", function() {
    var scrollHeight = document.querySelector(".-GlrD._2xoTX").offsetHeight;
    var scrollPosition = document.getElementById('pane-side').offsetHeight + $("pane-side").scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight !== 0) {
        // when scroll to bottom of the page
	}
});
}
