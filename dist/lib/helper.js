function makeid(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=r.length,o=0;o<e;o++)t+=r.charAt(Math.floor(Math.random()*a));return t.toString()}function bgmusic(e){currentSound?(currentSound.fade(.08,0,1e3),currentSound.once("fade",(()=>{currentSound.stop(),currentSound=!1,e&&bgmusic(e)}))):e&&(currentSound=SOUND[e],currentSound.play(),currentSound.loop(!0),currentSound.fade(0,.08,1e3))}function showLoader(){document.getElementById("loader").style.display="block"}function hideLoader(){document.getElementById("loader").style.display="none"}function scoreMsg(){var e=ROTM.gs(),t=e.score[e.isPlayer1?0:1],r=e.score[e.isPlayer1?1:0];return t>r?"won":t<r?"lost":t==r?"drew":void 0}function drawLocalScore(){var e=ROTM.gs(),t=localScore[e.isPlayer1?0:1].toString(),r=localScore[e.isPlayer1?1:0].toString();st1&&(st1.text(t),st2.text(r))}function drawScore(){var e=ROTM.gs();localScore=e.score;var t=e.score[e.isPlayer1?0:1].toString(),r=e.score[e.isPlayer1?1:0].toString();st1?(st1.text(t),st2.text(r)):(st1=currentRoom.draw.text(t).font({size:50,anchor:"middle"}).translate(650,170).fill(CONFIG.colors.ally),st2=currentRoom.draw.text(r).font({size:50,anchor:"middle"}).translate(1040,170).fill(CONFIG.colors.enemy))}function getcolor(e){var t=ROTM.gs();return t.isPlayer1&&1==e?CONFIG.colors.ally:t.isPlayer1&&2==e?CONFIG.colors.enemy:t.isPlayer1||1!=e?t.isPlayer1||2!=e?void 0:CONFIG.colors.ally:CONFIG.colors.enemy}function placeHex(e,t){var r=!1,a=0,o=0,n=e.player,c=1===n?2:1,l=gamegrid.neighborsOf(e),s=e.corners(),d=e.dx,m=e.dy,g=12;for(i=0;i<l.length;i++)void 0!==l[i]&&!1!==l[i].magni?l[i].player==n?(r&&(currentRoom.draw.circle(g).fill(getcolor(n)).move(s[i].x+d-6,s[i].y+m-6).stroke({width:2,color:"white"}),a++),5==i&&void 0!==l[0]&&l[0].player==n&&(currentRoom.draw.circle(g).fill(getcolor(n)).move(s[0].x+d-6,s[0].y+m-6).stroke({width:2,color:"white"}),a++),r=!0):(0==i?CONFIG.magni[e.magni[1].magni][5]>CONFIG.magni[l[i].magni[1].magni][2]?(currentRoom.draw.circle(g).fill(getcolor(n)).move((s[0].x+s[1].x)/2+d-6,(s[0].y+s[1].y)/2+m-6).stroke({width:2,color:"white"}),a++):CONFIG.magni[e.magni[1].magni][5]<CONFIG.magni[l[i].magni[1].magni][2]&&(currentRoom.draw.circle(g).fill(getcolor(c)).move((s[0].x+s[1].x)/2+d-6,(s[0].y+s[1].y)/2+m-6).stroke({width:2,color:"white"}),o++):5==i?CONFIG.magni[e.magni[1].magni][4]>CONFIG.magni[l[i].magni[1].magni][1]?(currentRoom.draw.circle(g).fill(getcolor(n)).move((s[5].x+s[0].x)/2+d-6,(s[5].y+s[0].y)/2+m-6).stroke({width:2,color:"white"}),a++):CONFIG.magni[e.magni[1].magni][4]<CONFIG.magni[l[i].magni[1].magni][1]&&(currentRoom.draw.circle(g).fill(getcolor(c)).move((s[5].x+s[0].x)/2+d-6,(s[5].y+s[0].y)/2+m-6).stroke({width:2,color:"white"}),o++):2==i?CONFIG.magni[e.magni[1].magni][1]>CONFIG.magni[l[i].magni[1].magni][4]?(currentRoom.draw.circle(g).fill(getcolor(n)).move((s[2].x+s[3].x)/2+d-6,(s[2].y+s[3].y)/2+m-6).stroke({width:2,color:"white"}),a++):CONFIG.magni[e.magni[1].magni][1]<CONFIG.magni[l[i].magni[1].magni][4]&&(currentRoom.draw.circle(g).fill(getcolor(c)).move((s[2].x+s[3].x)/2+d-6,(s[2].y+s[3].y)/2+m-6).stroke({width:2,color:"white"}),o++):3==i?CONFIG.magni[e.magni[1].magni][2]>CONFIG.magni[l[i].magni[1].magni][5]?(currentRoom.draw.circle(g).fill(getcolor(n)).move((s[3].x+s[4].x)/2+d-6,(s[3].y+s[4].y)/2+m-6).stroke({width:2,color:"white"}),a++):CONFIG.magni[e.magni[1].magni][2]<CONFIG.magni[l[i].magni[1].magni][5]&&(currentRoom.draw.circle(g).fill(getcolor(c)).move((s[3].x+s[4].x)/2+d-6,(s[3].y+s[4].y)/2+m-6).stroke({width:2,color:"white"}),o++):1!=i&&4!=i||(CONFIG.magni[e.magni[1].magni][3]>CONFIG.magni[l[i].magni[1].magni][3]?1==i?(currentRoom.draw.circle(g).fill(getcolor(n)).move((s[2].x+s[1].x)/2+d-6,(s[2].y+s[1].y)/2+m-6).stroke({width:2,color:"white"}),a++):4==i&&(currentRoom.draw.circle(g).fill(getcolor(n)).move((s[5].x+s[4].x)/2+d-6,(s[5].y+s[4].y)/2+m-6).stroke({width:2,color:"white"}),a++):CONFIG.magni[e.magni[1].magni][3]<CONFIG.magni[l[i].magni[1].magni][3]&&(1==i?(currentRoom.draw.circle(g).fill(getcolor(c)).move((s[2].x+s[1].x)/2+d-6,(s[2].y+s[1].y)/2+m-6).stroke({width:2,color:"white"}),o++):4==i&&(currentRoom.draw.circle(g).fill(getcolor(c)).move((s[5].x+s[4].x)/2+d-6,(s[5].y+s[4].y)/2+m-6).stroke({width:2,color:"white"}),o++))),r=!1):r=!1;t&&(1==n?(localScore[0]+=a,localScore[1]+=o):(localScore[0]+=o,localScore[1]+=a),drawLocalScore())}function updateSelectedTeam(){playergrid.map(((e,t)=>{selectedTeam[t]=e.magni})),drawCurrentRating()}function resetSelectedTeam(){selectedTeam=[]}function drawSelectedTeam(){teamDraw.clear();var e=0;selectedTeam.map(((t,r)=>{!1!==t&&(r>=5&&(e=1),teamDraw.image("assets/heros/"+t[1].magni+".png").flip("x").translate(300+150*e,100+150*(r-5*e)))}))}function isValidTeam(){var e=0;return selectedTeam.map((t=>{!1!==t&&e++})),10==e&&!(getCurrentRating()>23)}function getCardRank(e){return Math.ceil((CONFIG.magni[e][1]+CONFIG.magni[e][2]+2*CONFIG.magni[e][3]+CONFIG.magni[e][4]+CONFIG.magni[e][5])/20)}function getCurrentRating(){var e=0;return selectedTeam.map((t=>{!1!==t&&(e+=getCardRank(t[1].magni))})),e}function createButton(e,t,r,a,o,n){var i=currentRoom.draw.group();return i.rect(r,a).move(e,t).fill("#333"),i.text(o).font(CONFIG.fonts.buttons).translate(e+r/2,t+8).fill("white"),i.click((e=>{SOUND.select.play(),n(e)})),i.addClass("clickable"),i}function drawMessage(e){currentRoom.headerMessage?currentRoom.headerMessage.text(e):currentRoom.headerMessage=currentRoom.draw.text(e).font(CONFIG.fonts.messages).translate(600,35).fill("white")}function drawOnlineMessage(e){omd?omd.text(e):omd=currentRoom.draw.text(e).font({size:12,anchor:"middle",family:"Verdana",weight:"bold"}).translate(255,670).fill("white")}function clearOnlineMessage(){omd&&omd.clear()}function drawCurrentRating(){var e=getCurrentRating(),t="#fff";e>23&&(t="red"),rd?rd.text(e+"/23"):rd=currentRoom.draw.text(e+"/23").font(CONFIG.fonts.ratings).translate(360,160).fill(t)}function launchAdventure(e,t){chapter=e,scene=t,processNextScene()}function processNextScene(e){if(scene>=CONFIG.adventure[chapter].length)rooms.menu.enter();else{var t=CONFIG.adventure[chapter][scene];switch(e||rooms.adventure.scene.clear(),t.type){case"title":rooms.adventure.scene.text(t.title).font(CONFIG.fonts.title).translate(600,200).fill("white"),void 0!==t.backgroundColor?setBackgroundColor(t.backgroundColor):setBackgroundColor(),void 0!==t.background?setBackground(t.background):setBackground(),void 0!==t.subtitle&&rooms.adventure.scene.text(t.subtitle).font(CONFIG.fonts.subtitle).translate(600,300).fill("white"),fadeToNextEvent(t.delay);break;case"overlay":void 0!==t.backgroundColor&&setBackgroundColor(t.backgroundColor),setBackground(t.background),fadeToNextEvent(t.delay);break;case"chat":inchat?(chatnp.clear(),chatnp.opacity(1)):(inchat=!0,rooms.adventure.scene.image("assets/chat_bg.png").translate(25,625),chatnp=rooms.adventure.scene.group());var r=450;void 0===t.side||"left"==t.side?chatnp.image(CONFIG.characters[t.character].image).translate(0,570):(r=80,chatnp.image(CONFIG.characters[t.character].image).flip("x").translate(1200,570)),chatnp.text(CONFIG.characters[t.character].name+": "+t.text).font(CONFIG.fonts.chat).translate(r,670).fill("black"),rooms.adventure.clickHandler=()=>{rooms.adventure.clickHandler=!1,CONFIG.adventure[chapter][scene+1]&&"chat"==CONFIG.adventure[chapter][scene+1].type?chatnp.animate().opacity(0).after((()=>{scene++,processNextScene(!0)})):(inchat=!1,chatnp.clear(),fadeToNextEvent())};break;case"battle":void 0!==t.backgroundColor?setBackgroundColor(t.backgroundColor):setBackgroundColor("white"),void 0!==t.background?setBackground(t.background):setBackground("assets/bg.jpg"),void 0===t.board&&(t.board="standard");var a=t.board;"string"==typeof a&&(a=CONFIG.boards[a]);var o=e=>{fadeToBlack((()=>{rooms.adventure.enter(),rooms.adventure.scene.clear(),setBackgroundColor(),setBackground(),fadeFromBlack((()=>{var r,a="next",o="back",n="back";if(void 0!==t.result&&(void 0!==t.result.win&&(a=t.result.win),void 0!==t.result.lose&&(o=t.result.lose),void 0!==t.result.draw&&(n=t.result.draw)),1==e?(rooms.adventure.scene.text("YOU WON").font(CONFIG.fonts.title).translate(600,200).fill("white"),r=a):2==e?(rooms.adventure.scene.text("DRAW").font(CONFIG.fonts.title).translate(600,200).fill("white"),r=n):(rooms.adventure.scene.text("DEFEATED").font(CONFIG.fonts.title).translate(600,200).fill("white"),r=o),"next"==r)fadeToNextEvent(1);else if("back"==r)scene-=2,fadeToNextEvent(1);else{var i=r[1];"back"==r[0]?(scene-=i+2,fadeToNextEvent(1)):"next"==r[0]?(scene+=i,fadeToNextEvent(1)):"goto"==r[0]&&(scene=i,fadeToNextEvent(1))}}))}))},n=t.cards.slice();void 0!==t.character?rooms.game.enter(0,"Continue",o,n,a,t.character):rooms.game.enter(0,"Continue",o,n,a)}}}function setBackground(e){document.getElementById("gameContainer").getElementsByClassName("gameView")[0].style.backgroundImage=e?"url('"+e+"')":""}function setBackgroundColor(e){e||(e="black"),document.getElementById("gameContainer").getElementsByClassName("gameView")[0].style.backgroundColor=e}function fadeToBlack(e){FOREGROUND.show().animate(1e3).opacity(1).after(e)}function fadeFromBlack(e){FOREGROUND.animate(1e3).opacity(0).after((()=>{FOREGROUND.hide(),e()}))}function fadeToNextEvent(e){var t=()=>{FOREGROUND.show().animate(2e3).opacity(1).after((()=>{scene++,processNextScene(),FOREGROUND.animate(2e3).opacity(0).after((()=>{FOREGROUND.hide()}))}))};e?setTimeout(t,1e3*e):t()}