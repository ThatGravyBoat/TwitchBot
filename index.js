        let params = new URLSearchParams( location.search );
        var gravy = new Audio('sound_files/gravy.wav');
        var auri = new Audio('sound_files/auri.wav');
        var slof = new Audio('sound_files/slof.wav');
        var frozen = new Audio('sound_files/frozen.wav');
        var snow = new Audio('sound_files/snow.wav');
        var bella = new Audio('sound_files/bella.wav');
        var armybeast = new Audio('sound_files/armybeast.wav');
        var amazzaru = new Audio('sound_files/amazzaru.wav');
        var anno = new Audio('sound_files/anno.wav');
        var aryu = new Audio('sound_files/aryu.wav');
        var ascndr = new Audio('sound_files/ascndr.wav');
        var banzanna = new Audio('sound_files/banzanna.wav');
        var ben = new Audio('sound_files/ben.wav');
        var beniswell = new Audio('sound_files/beniswell.wav');
        var bianca = new Audio('sound_files/bianca.wav');
        var bigrye = new Audio('sound_files/bigrye.wav');
        var brutish = new Audio('sound_files/brutish.wav');
        var casper = new Audio('sound_files/casper.wav');
        var cat = new Audio('sound_files/cat.wav');
        var catman = new Audio('sound_files/catman.wav');
        var cheesecakem = new Audio('sound_files/cheesecakem.wav');
        var chris = new Audio('sound_files/chris.wav');
        var crumpett = new Audio('sound_files/crumpett.wav');
        var delight = new Audio('sound_files/delight.wav');
        var dense = new Audio('sound_files/dense.wav');
        var dikke = new Audio('sound_files/dikke.wav');
        var double = new Audio('sound_files/double.wav');
        var equinox = new Audio('sound_files/equinox.wav');
        var erik = new Audio('sound_files/erik.wav');
        var erzaskill = new Audio('sound_files/erzaskill.wav');
        var fristy = new Audio('sound_files/fristy.wav');
        var ghost = new Audio('sound_files/ghost.wav');
        var gome = new Audio('sound_files/gome.wav');
        var jet = new Audio('sound_files/jet.wav');
        var josue = new Audio('sound_files/josue.wav');
        var justice = new Audio('sound_files/justice.wav');
        var koko = new Audio('sound_files/koko.wav');
        var looney = new Audio('sound_files/looney.wav');
        var megaty = new Audio('sound_files/megaty.wav');
        var mel = new Audio('sound_files/mel.wav');
        var moonshine = new Audio('sound_files/moonshine.wav');
        var napo = new Audio('sound_files/napo.wav');
        var nutes = new Audio('sound_files/nutes.wav');
        var panda = new Audio('sound_files/panda.wav');
        var papa = new Audio('sound_files/papa.wav');
        var perpurple = new Audio('sound_files/perpurple.wav');
        var philipeace = new Audio('sound_files/philipeace.wav');
        var potter = new Audio('sound_files/potter.wav');
        var primal = new Audio('sound_files/primal.wav');
        var revolter = new Audio('sound_files/revolter.wav');
        var ross = new Audio('sound_files/ross.wav');
        var shadisy = new Audio('sound_files/shadisy.wav');
        var shaunzom = new Audio('sound_files/shaunzom.wav');
        var shundrie = new Audio('sound_files/shundrie.wav');
        var simon = new Audio('sound_files/simon.wav');
        var sockie = new Audio('sound_files/sockie.wav');
        var sonny = new Audio('sound_files/sonny.wav');
        var spacko = new Audio('sound_files/spacko.wav');
        var steffknight = new Audio('sound_files/steffknight.wav');
        var swoopy = new Audio('sound_files/swoopy.wav');
        var taco = new Audio('sound_files/taco.wav');
        var toby = new Audio('sound_files/toby.wav');
        var torstie = new Audio('sound_files/torstie.wav');
        var total = new Audio('sound_files/total.wav');
        var treatfly = new Audio('sound_files/treatfly.wav');
        var turtle = new Audio('sound_files/turtle.wav');
        var twists = new Audio('sound_files/twists.wav');
        var vulpix = new Audio('sound_files/vulpix.wav');
        var waddell = new Audio('sound_files/waddell.wav');
        var yosh = new Audio('sound_files/yosh.wav');
        var karma = new Audio('sound_files/karma.wav');
        var bhagt = new Audio('sound_files/bye-have-a-great-time.mp3');
        var jeopardy = new Audio('sound_files/Jeopardy_Theme.mp3');
        var wood = new Audio('sound_files/like_some_wood.mp3');
        var soundVolume = 100;

        function addpoints(name, points) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                    var response = xhttp.responseText;
                    console.log("ok"+response);
                }
            };
            xhttp.open("PUT", "https://api.streamelements.com/kappa/v2/points/"+params.get( "streamid" )+"/" + name + "/" + points, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("Authorization", "Bearer " + params.get( "streamjwt" ));
            
            xhttp.send();
        }

        function redeem(item) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                    var response = xhttp.responseText;
                    console.log("ok"+response);
                }
            };
            xhttp.open("POST", "https://api.streamelements.com/kappa/v2/store/"+params.get( "streamid" )+"/redemptions/"+ item, true);
            xhttp.setRequestHeader("Authorization", "Bearer " + params.get( "streamejwt" ));
            
            xhttp.send();
        }


        // ComfyJS.onConnected = () => {
        //     ComfyJS.Say( "!setpoints jaxdagger 50000");
        // }
        //  ______                           _     
        //  | ___ \                         | |    
        //  | |_/ /_____      ____ _ _ __ __| |___ 
        //  |    // _ \ \ /\ / / _` | '__/ _` / __|
        //  | |\ \  __/\ V  V / (_| | | | (_| \__ \
        //  \_| \_\___| \_/\_/ \__,_|_|  \__,_|___/
        //                                         
        //                                         
        ComfyJS.onChat = ( user, command, message, flags, extra) => {
                 if (extra.customRewardId == "5606c07b-ddc3-460a-aeb0-98b1533c9824") {addpoints(user, 500)}
                 if (extra.customRewardId == "c2f5aa38-ddd3-42c6-9b6a-5edd93a2317b") {redeem('5cd16535d6b486305283ce5e')}    
                 if (extra.customRewardId == "d39efd20-8dad-4578-9ee8-c854809ade1b") {addpoints(user, 2000)}
        }
        //     ___       _         _                 
        //    |_  |     (_)       | |                
        //      | | ___  _ _ __   | |     ___   __ _ 
        //      | |/ _ \| | '_ \  | |    / _ \ / _` |
        //  /\__/ / (_) | | | | | | |___| (_) | (_| |
        //  \____/ \___/|_|_| |_| \_____/\___/ \__, |
        //                                      __/ |
        //                                     |___/ 
        let list = document.getElementById('userNames');
        function scrollToBottom(id){
            var div = document.getElementById(id);
            div.scrollTop = div.scrollHeight - div.clientHeight;
        }
        ComfyJS.onJoin = ( user, self ) => {
            var month = new Date().getDate();
            var hour = new Date().getHours();
            var min = new Date().getMinutes();
            if(min < 10) {
            let userItem = document.createElement("li");
            let userName = document.createTextNode("[" + hour + ":0" + min  + "]User Joined Chat : " + user);
            userItem.style = "color: yellow;"
            userItem.appendChild(userName);
            list.appendChild(userItem);
            scrollToBottom('ul-div');
            }
            else {
                let userItem = document.createElement("li");
                let userName = document.createTextNode("[" + hour + ":" + min  + "]User Joined Chat : " + user);
                userItem.style = "color: yellow;"
                userItem.appendChild(userName);
                list.appendChild(userItem);
                scrollToBottom('ul-div');
            }
        }
        ComfyJS.onPart = ( user, self ) => {
            var month = new Date().getDate();
            var hour = new Date().getHours();
            var min = new Date().getMinutes();
            if(min < 10) {
                let userItem = document.createElement("li");
                let userName = document.createTextNode("[" + hour + ":0" + min  + "]User Left Chat : " + user);
                userItem.style = "color: red;"
                userItem.appendChild(userName);
                list.appendChild(userItem);
                scrollToBottom('ul-div');
            }
            else {
                let userItem = document.createElement("li");
                let userName = document.createTextNode("[" + hour + ":" + min  + "]User Left Chat : " + user);
                userItem.style = "color: red;"
                userItem.appendChild(userName);
                list.appendChild(userItem);
                scrollToBottom('ul-div');
            }
        }
        //   _____                                           _           __ ______                           _     
        //  /  __ \                                         | |         / / | ___ \                         | |    
        //  | /  \/ ___  _ __ ___  _ __ ___   __ _ _ __   __| |___     / /  | |_/ /_____      ____ _ _ __ __| |___ 
        //  | |    / _ \| '_ ` _ \| '_ ` _ \ / _` | '_ \ / _` / __|   / /   |    // _ \ \ /\ / / _` | '__/ _` / __|
        //  | \__/\ (_) | | | | | | | | | | | (_| | | | | (_| \__ \  / /    | |\ \  __/\ V  V / (_| | | | (_| \__ \
        //   \____/\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|\__,_|___/ /_/     \_| \_\___| \_/\_/ \__,_|_|  \__,_|___/
        //                                                                                                         
        //                                                                                                         
        ComfyJS.onCommand = ( user, command, message, flags, extra) => {
            if( command === "gravy" && user.toLowerCase() == "thatgravyboat") {gravy.play()}
            if( command === "auri" && user.toLowerCase() == "theauri") {auri.play()}
            if( command === "slof" && user.toLowerCase() == "thelazyslof") {slof.play()}
            if( command === "frozen" && user.toLowerCase() == "frozennq") {frozen.play()}
            if( command === "snow" && user.toLowerCase() == "snowbunting") {snow.play()}
            if( command === "bella" && user.toLowerCase() == "missizabella") {bella.play()}
            if( command === "armybeast" && user.toLowerCase() == "armybeast09") {armybeast.play()}
            if( command === "amazzaru" && user.toLowerCase() == "amazzaru") {amazzaru.play()}
            if( command === "anno" && user.toLowerCase() == "anno_critical") {anno.play()}
            if( command === "(:" && user.toLowerCase() == "aryujaded") {aryu.play()}
            if( command === ">:)" && user.toLowerCase() == "ascndr_") {ascndr.play()}
            if( command === "banzanna" && user.toLowerCase() == "banzanna") {banzanna.play()}
            if( command === "ben" && user.toLowerCase() == "benhope") {ben.play()}
            if( command === "beniswell" && user.toLowerCase() == "beniswell") {beniswell.play()}
            if( command === "bianca" && user.toLowerCase() == "biancazaayman") {bianca.play()}
            if( command === "bigrye" && user.toLowerCase() == "bigryety") {bigrye.play()}
            if( command === "brutish" && user.toLowerCase() == "brutishlamb") {brutish.play()}
            if( command === "casper" && user.toLowerCase() == "c7sper") {casper.play()}
            if( command === "cat" && user.toLowerCase() == "cat8898") {cat.play()}
            if( command === "catman" && user.toLowerCase() == "catman0501") {catman.play()}
            if( command === "cheesecakem" && user.toLowerCase() == "cheesecakem") {cheesecakem.play()}
            if( command === "chris" && user.toLowerCase() == "chri5rugby") {chris.play()}
            if( command === "crumpett" && user.toLowerCase() == "crumpett_") {crumpett.play()}
            if( command === "delight" && user.toLowerCase() == "delightfuii") {delight.play()}
            if( command === "dense" && user.toLowerCase() == "densebunny") {dense.play()}
            if( command === "dikke" && user.toLowerCase() == "dikkekater") {dikke.play()}
            if( command === "double" && user.toLowerCase() == "double0kills") {double.play()}
            if( command === "equinox" && user.toLowerCase() == "equanoxqq") {equinox.play()}
            if( command === "erik" && user.toLowerCase() == "eriktenacity") {erik.play()}
            if( command === "erzaskill" && user.toLowerCase() == "erzaskill") {erzaskill.play()}
            if( command === "fristy" && user.toLowerCase() == "fristyy") {fristy.play()}
            if( command === "ghost" && user.toLowerCase() == "ighostyi_") {ghost.play()}
            if( command === "gome" && user.toLowerCase() == "notgomenasai") {gome.play()}
            if( command === "gome" && user.toLowerCase() == "gomenasai_") {gome.play()}
            if( command === "jet" && user.toLowerCase() == "jetrvoox") {jet.play()}
            if( command === "joel" && user.toLowerCase() == "joelkjn") {joel.play()}
            if( command === "jonny" && user.toLowerCase() == "jonny_rottin") {jonny.play()}
            if( command === "josue" && user.toLowerCase() == "vjosuee") {josue.play()}
            if( command === "justice" && user.toLowerCase() == "justicegg") {justice.play()}
            if( command === "koko" && user.toLowerCase() == "kokomonkey78") {koko.play()}
            if( command === "looney" && user.toLowerCase() == "looneychoonzz") {looney.play()}
            if( command === "megaty" && user.toLowerCase() == "megaty97") {megaty.play()}
            if( command === "mel" && user.toLowerCase() == "melynara") {mel.play()}
            if( command === "moonshine" && user.toLowerCase() == "m0onshlne") {moonshine.play()}
            if( command === "napo" && user.toLowerCase() == "el_napo") {napo.play()}
            if( command === "nutes" && user.toLowerCase() == "nogoodnutes") {nutes.play()}
            if( command === "panda" && user.toLowerCase() == "pandaasura") {panda.play()}
            //if( command === "papa" && user.toLowerCase() == "pandaasura") {papa.play()}
            if( command === "perpurple" && user.toLowerCase() == "perpurpler") {perpurple.play()}
            if( command === "philipeace" && user.toLowerCase() == "philipeace") {philipeace.play()}
            if( command === "potter" && user.toLowerCase() == "pottersauce") {potter.play()}
            if( command === "primal" && user.toLowerCase() == "primalcinder") {primal.play()}
            //if( command === "revolter" && user.toLowerCase() == "thatgravyboat") {revolter.play()}
            if( command === "ross" && user.toLowerCase() == "rxsstv") {ross.play()}
            if( command === "shadisy" && user.toLowerCase() == "shadisy") {shadisy.play()}
            if( command === "shaunzom" && user.toLowerCase() == "shaunzomgaming") {shaunzom.play()}
            if( command === "shundrie" && user.toLowerCase() == "shundrie") {shundrie.play()}
            //if( command === "simon" && user.toLowerCase() == "pandaasura") {simon.play()}
            if( command === "sockie" && user.toLowerCase() == "sockiex") {sockie.play()}
            if( command === "sonny" && user.toLowerCase() == "sonnyinchaines") {sonny.play()}
            if( command === "spacko" && user.toLowerCase() == "mr_spacko") {spacko.play()}
            if( command === "steffknight" && user.toLowerCase() == "steffknight") {steffknight.play()}
            if( command === "swoopy" && user.toLowerCase() == "swoopyyyyy") {swoopy.play()}
            if( command === "taco" && user.toLowerCase() == "tacostandqueen") {taco.play()}
            if( command === "toby" && user.toLowerCase() == "tobyeee") {toby.play()}
            if( command === "torstie" && user.toLowerCase() == "torstie") {torstie.play()}
            if( command === "total" && user.toLowerCase() == "totalverzockthd") {total.play()}
            if( command === "treatfly" && user.toLowerCase() == "treatfly") {treatfly.play()}
            if( command === "turtle" && user.toLowerCase() == "theturtlechrist") {turtle.play()}
            if( command === "twists" && user.toLowerCase() == "twists20g") {twists.play()}
            if( command === "vulpix" && user.toLowerCase() == "vulpixow") {vulpix.play()}
            if( command === "waddell" && user.toLowerCase() == "cwaddell98") {waddell.play()}
            if( command === "yosh" && user.toLowerCase() == "yosh_bts") {yosh.play()}
            if( command === "karma" && user.toLowerCase() == "karmaizabeach") {karma.play()}

            if( command === "gravy" && user.toLowerCase() == "jaxdagger") {gravy.play()}
            if( command === "auri" && user.toLowerCase() == "jaxdagger") {auri.play()}
            if( command === "slof" && user.toLowerCase() == "jaxdagger") {slof.play()}
            if( command === "frozen" && user.toLowerCase() == "jaxdagger") {frozen.play()}
            if( command === "snow" && user.toLowerCase() == "jaxdagger") {snow.play()}
            if( command === "bella" && user.toLowerCase() == "jaxdagger") {bella.play()}
            if( command === "armybeast" && user.toLowerCase() == "jaxdagger") {armybeast.play()}
            if( command === "amazzaru" && user.toLowerCase() == "jaxdagger") {amazzaru.play()}
            if( command === "anno" && user.toLowerCase() == "jaxdagger") {anno.play()}
            if( command === "(:" && user.toLowerCase() == "jaxdagger") {aryu.play()}
            if( command === ">:)" && user.toLowerCase() == "jaxdagger") {asncdr.play()}
            if( command === "banzanna" && user.toLowerCase() == "jaxdagger") {banzanna.play()}
            if( command === "ben" && user.toLowerCase() == "jaxdagger") {ben.play()}
            if( command === "beniswell" && user.toLowerCase() == "jaxdagger") {beniswell.play()}
            if( command === "bianca" && user.toLowerCase() == "jaxdagger") {bianca.play()}
            if( command === "bigrye" && user.toLowerCase() == "jaxdagger") {bigrye.play()}
            if( command === "brutish" && user.toLowerCase() == "jaxdagger") {brutish.play()}
            if( command === "casper" && user.toLowerCase() == "jaxdagger") {casper.play()}
            if( command === "cat" && user.toLowerCase() == "jaxdagger") {cat.play()}
            if( command === "catman" && user.toLowerCase() == "jaxdagger") {catman.play()}
            if( command === "cheesecakem" && user.toLowerCase() == "jaxdagger") {cheesecakem.play()}
            if( command === "chris" && user.toLowerCase() == "jaxdagger") {chris.play()}
            if( command === "crumpett" && user.toLowerCase() == "jaxdagger") {crumpett.play()}
            if( command === "delight" && user.toLowerCase() == "jaxdagger") {delight.play()}
            if( command === "dense" && user.toLowerCase() == "jaxdagger") {dense.play()}
            if( command === "dikke" && user.toLowerCase() == "jaxdagger") {dikke.play()}
            if( command === "double" && user.toLowerCase() == "jaxdagger") {double.play()}
            if( command === "equinox" && user.toLowerCase() == "jaxdagger") {equinox.play()}
            if( command === "erik" && user.toLowerCase() == "jaxdagger") {erik.play()}
            if( command === "erzaskill" && user.toLowerCase() == "jaxdagger") {erzaskill.play()}
            if( command === "fristy" && user.toLowerCase() == "jaxdagger") {fristy.play()}
            if( command === "ghost" && user.toLowerCase() == "jaxdagger") {ghost.play()}
            if( command === "gome" && user.toLowerCase() == "jaxdagger") {gome.play()}
            if( command === "gome" && user.toLowerCase() == "jaxdagger") {gome.play()}
            if( command === "jet" && user.toLowerCase() == "jaxdagger") {jet.play()}
            if( command === "joel" && user.toLowerCase() == "jaxdagger") {joel.play()}
            if( command === "jonny" && user.toLowerCase() == "jaxdagger") {jonny.play()}
            if( command === "josue" && user.toLowerCase() == "jaxdagger") {josue.play()}
            if( command === "justice" && user.toLowerCase() == "jaxdagger") {justice.play()}
            if( command === "koko" && user.toLowerCase() == "jaxdagger") {koko.play()}
            if( command === "looney" && user.toLowerCase() == "jaxdagger") {looney.play()}
            if( command === "megaty" && user.toLowerCase() == "jaxdagger") {megaty.play()}
            if( command === "mel" && user.toLowerCase() == "jaxdagger") {mel.play()}
            if( command === "moonshine" && user.toLowerCase() == "jaxdagger") {moonshine.play()}
            if( command === "napo" && user.toLowerCase() == "jaxdagger") {napo.play()}
            if( command === "nutes" && user.toLowerCase() == "jaxdagger") {nutes.play()}
            if( command === "panda" && user.toLowerCase() == "jaxdagger") {panda.play()}
            if( command === "papa" && user.toLowerCase() == "jaxdagger") {papa.play()}
            if( command === "perpurple" && user.toLowerCase() == "jaxdagger") {perpurple.play()}
            if( command === "philipeace" && user.toLowerCase() == "jaxdagger") {philipeace.play()}
            if( command === "potter" && user.toLowerCase() == "jaxdagger") {potter.play()}
            if( command === "primal" && user.toLowerCase() == "jaxdagger") {primal.play()}
            if( command === "revolter" && user.toLowerCase() == "jaxdagger") {revolter.play()}
            if( command === "ross" && user.toLowerCase() == "jaxdagger") {ross.play()}
            if( command === "shadisy" && user.toLowerCase() == "jaxdagger") {shadisy.play()}
            if( command === "shaunzom" && user.toLowerCase() == "jaxdagger") {shaunzom.play()}
            if( command === "shundrie" && user.toLowerCase() == "jaxdagger") {shundrie.play()}
            if( command === "simon" && user.toLowerCase() == "jaxdagger") {simon.play()}
            if( command === "sockie" && user.toLowerCase() == "jaxdagger") {sockie.play()}
            if( command === "sonny" && user.toLowerCase() == "jaxdagger") {sonny.play()}
            if( command === "spacko" && user.toLowerCase() == "jaxdagger") {spacko.play()}
            if( command === "steffknight" && user.toLowerCase() == "jaxdagger") {steffknight.play()}
            if( command === "swoopy" && user.toLowerCase() == "jaxdagger") {swoopy.play()}
            if( command === "taco" && user.toLowerCase() == "jaxdagger") {taco.play()}
            if( command === "toby" && user.toLowerCase() == "jaxdagger") {toby.play()}
            if( command === "torstie" && user.toLowerCase() == "jaxdagger") {torstie.play()}
            if( command === "total" && user.toLowerCase() == "jaxdagger") {total.play()}
            if( command === "treatfly" && user.toLowerCase() == "jaxdagger") {treatfly.play()}
            if( command === "turtle" && user.toLowerCase() == "jaxdagger") {turtle.play()}
            if( command === "twists" && user.toLowerCase() == "jaxdagger") {twists.play()}
            if( command === "vulpix" && user.toLowerCase() == "jaxdagger") {vulpix.play()}
            if( command === "waddell" && user.toLowerCase() == "jaxdagger") {waddell.play()}
            if( command === "yosh" && user.toLowerCase() == "jaxdagger") {yosh.play()}
            if( command === "karma" && user.toLowerCase() == "jaxdagger") {karma.play()}
            if( command === "playsound" && user.toLowerCase() == "thatgravyboat") {
                switch (message) {
                    case "bhagt":
                        bhagt.volume = soundVolume;
                        bhagt.play()
                        break;
                    case "jeopardy":
                        jeopardy.volume = soundVolume;
                        jeopardy.play()
                        break;
                    case "wood":
                        wood.volume = soundVolume;
                        wood.play()
                        break;
                    case "0":
                        bhagt.volume = soundVolume;
                        bhagt.play()
                        break;
                    case "1":
                        jeopardy.volume = soundVolume;
                        jeopardy.play()
                        break;
                    case "2":
                        wood.volume = soundVolume;
                        wood.play()
                        break;
                }
            }
            if( command === "pausesound" && user.toLowerCase() == "thatgravyboat") {
                switch (message) {
                    case "bhagt":
                        bhagt.pause()
                        bhagt.currentTime = 0;
                        break;
                    case "jeopardy":
                        jeopardy.pause()
                        jeopardy.currentTime = 0;
                        break;
                    case "wood":
                        wood.pause()
                        wood.currentTime = 0;
                        break;
                    case "0":
                        bhagt.pause()
                        bhagt.currentTime = 0;
                        break;
                    case "1":
                        jeopardy.pause()
                        jeopardy.currentTime = 0;
                        break;
                    case "2":
                        wood.pause()
                        wood.currentTime = 0;
                        break;
                }
            }
            if( command === "soundvolume" && user.toLowerCase() == "thatgravyboat") {
                if (message >= 1) {
                    var soundVolume = message;
                    ComfyJS.Say( "/me Volume set to " + soundVolume);
                }
                else {
                    ComfyJS.Say( "/me Set volume from a number between 0 and 1");
                }
            }
            if( command === "soundvolume" && user.toLowerCase() == "jaxdagger") {
                if (message >= 1) {
                    var soundVolume = message;
                    ComfyJS.Say( "/me Volume set to " + soundVolume);
                }
                else {
                    ComfyJS.Say( "/me Set volume from a number between 0 and 1");
                }
            }
            //Rewards
            if (command.length > -1 && extra.customRewardId == "5606c07b-ddc3-460a-aeb0-98b1533c9824") {addpoints(user, 500)}
            if (command.length > -1 && extra.customRewardId == "d39efd20-8dad-4578-9ee8-c854809ade1b") {addpoints(user, 2000)}
            if (command.length > -1 && extra.customRewardId == "c2f5aa38-ddd3-42c6-9b6a-5edd93a2317b") {redeem('5cd16535d6b486305283ce5e')}
        }
        ComfyJS.Init( "BotDagger", "oauth:" + params.get( "oauth" ), "JaxDagger" );