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
        var matoa = new Audio('sound_files/matoa.wav');
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
        var tickle = new Audio('sound_files/tickle.wav');
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
        var kylie = new Audio('sound_files/kylie.wav');
        var bhagt = new Audio('sound_files/bye-have-a-great-time.mp3');
        var jeopardy = new Audio('sound_files/Jeopardy_Theme.mp3');
        var wood = new Audio('sound_files/like_some_wood.mp3');
        var moist = new Audio('sound_files/moist.wav');
        var soundVolume = 0.75;
        var userSoundVolume = 0.75;


        var approvedUser = ["jaxdagger", "thatgravyboat", "densebunny"];

        function addpoints(name, points) {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                    var response = xhttp.responseText;
                    console.log("ok"+response);
                }
            };
            xhttp.open("PUT", "https://api.streamelements.com/kappa/v2/points/"+params.get( "streamid" )+ "/" + name + "/" + points, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("Authorization", "Bearer " + params.get( "streamejwt" ));
            
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

        async function speakMessage( message, ttsVoice ) {
            let speak = await fetch( `https://api.streamelements.com/kappa/v2/speech?voice=${ttsVoice}&text=` + encodeURIComponent( message.trim() ) );
              if( speak.status != 200 ) {
                  // await speak.text();
                  return;
              }
    
            let mp3 = await speak.blob();
            let blobUrl = URL.createObjectURL( mp3 );
                document.getElementById( "source" ).setAttribute( "src", blobUrl );
                let audio = document.getElementById( "audio" );
                audio.pause();
                audio.load();
                audio.volume = 1;
                audio.play();
          }


        ComfyJS.onConnected = () => {
            ComfyJS.Say( "!setpoints jaxdagger 50000");
        }
        //  ______                           _     
        //  | ___ \                         | |    
        //  | |_/ /_____      ____ _ _ __ __| |___ 
        //  |    // _ \ \ /\ / / _` | '__/ _` / __|
        //  | |\ \  __/\ V  V / (_| | | | (_| \__ \
        //  \_| \_\___| \_/\_/ \__,_|_|  \__,_|___/
        //                                         
        //                                         
        ComfyJS.onChat = ( user, command, message, flags, extra) => {
                 if (extra.customRewardId == "5606c07b-ddc3-460a-aeb0-98b1533c9824") {addpoints(user, 500);}
                 if (extra.customRewardId == "c2f5aa38-ddd3-42c6-9b6a-5edd93a2317b") {redeem('5cd16535d6b486305283ce5e')}    
                 if (extra.customRewardId == "d39efd20-8dad-4578-9ee8-c854809ade1b") {addpoints(user, 2000);}
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
            if( command === "gravy" && (user.toLowerCase() == "thatgravyboat" || user.toLowerCase() == "jaxdagger")) {gravy.volume = window.userSoundVolume;gravy.play()}
            if( command === "auri" && (user.toLowerCase() == "theauri" || user.toLowerCase() == "jaxdagger")) {auri.volume  = window.userSoundVolume;auri.play()}
            if( command === "slof" && (user.toLowerCase() == "thelazyslof" || user.toLowerCase() == "jaxdagger")) {slof.volume = window.userSoundVolume;slof.play()}
            if( command === "frozen" && (user.toLowerCase() == "frozennq" || user.toLowerCase() == "jaxdagger")) {frozen.volume = window.userSoundVolume;frozen.play()}
            if( command === "snow" && (user.toLowerCase() == "snowbunting" || user.toLowerCase() == "jaxdagger")) {snow.volume = window.userSoundVolume;snow.play()}
            if( command === "bella" && (user.toLowerCase() == "missizabella" || user.toLowerCase() == "jaxdagger")) {bella.volume = window.userSoundVolume;bella.play()}
            if( command === "armybeast" && (user.toLowerCase() == "armybeast09" || user.toLowerCase() == "jaxdagger")) {armybeast.volume = window.userSoundVolume;armybeast.play()}
            if( command === "amazzaru" && (user.toLowerCase() == "amazzaru" || user.toLowerCase() == "jaxdagger")) {amazzaru.volume = window.userSoundVolume;amazzaru.play()}
            if( command === "anno" && (user.toLowerCase() == "anno_critical" || user.toLowerCase() == "jaxdagger")) {anno.volume = window.userSoundVolume;anno.play()}
            if( command === "(:" && (user.toLowerCase() == "aryujaded" || user.toLowerCase() == "jaxdagger")) {aryu.volume = window.userSoundVolume;aryu.play()}
            if( command === ">:)" && (user.toLowerCase() == "ascndr_" || user.toLowerCase() == "jaxdagger")) {ascndr.volume = window.userSoundVolume;ascndr.play()}
            if( command === "banzanna" && (user.toLowerCase() == "banzanna" || user.toLowerCase() == "jaxdagger")) {banzanna.volume = window.userSoundVolume;banzanna.play()}
            if( command === "ben" && (user.toLowerCase() == "benhope" || user.toLowerCase() == "jaxdagger")) {ben.volume = window.userSoundVolume;ben.play()}
            if( command === "beniswell" && (user.toLowerCase() == "beniswell" || user.toLowerCase() == "jaxdagger")) {beniswell.volume = window.userSoundVolume;beniswell.play()}
            if( command === "bianca" && (user.toLowerCase() == "biancazaayman" || user.toLowerCase() == "jaxdagger")) {bianca.volume = window.userSoundVolume;bianca.play()}
            if( command === "bigrye" && (user.toLowerCase() == "bigryety" || user.toLowerCase() == "jaxdagger")) {bigrye.volume = window.userSoundVolume;bigrye.play()}
            if( command === "brutish" && (user.toLowerCase() == "brutishlamb" || user.toLowerCase() == "jaxdagger")) {brutish.volume = window.userSoundVolume;brutish.play()}
            if( command === "casper" && (user.toLowerCase() == "c7sper" || user.toLowerCase() == "jaxdagger")) {casper.volume = window.userSoundVolume;casper.play()}
            if( command === "cat" && (user.toLowerCase() == "cat8898" || user.toLowerCase() == "jaxdagger")) {cat.volume = window.userSoundVolume;cat.play()}
            if( command === "catman" && (user.toLowerCase() == "catman0501" || user.toLowerCase() == "jaxdagger")) {catman.volume = window.userSoundVolume;catman.play()}
            if( command === "cheesecakem" && (user.toLowerCase() == "cheesecakem" || user.toLowerCase() == "jaxdagger")) {cheesecakem.volume = window.userSoundVolume;cheesecakem.play()}
            if( command === "chris" && (user.toLowerCase() == "chri5rugby" || user.toLowerCase() == "jaxdagger")) {chris.volume = window.userSoundVolume;chris.play()}
            if( command === "crumpett" && (user.toLowerCase() == "crumpett_" || user.toLowerCase() == "jaxdagger")) {crumpett.volume = window.userSoundVolume;crumpett.play()}
            if( command === "delight" && (user.toLowerCase() == "delightfuii" || user.toLowerCase() == "jaxdagger")) {delight.volume = window.userSoundVolume;delight.play()}
            if( command === "dense" && (user.toLowerCase() == "densebunny" || user.toLowerCase() == "jaxdagger")) {dense.volume = window.userSoundVolume;dense.play()}
            if( command === "dikke" && (user.toLowerCase() == "dikkekater" || user.toLowerCase() == "jaxdagger")) {dikke.volume = window.userSoundVolume;dikke.play()}
            if( command === "double" && (user.toLowerCase() == "double0kills" || user.toLowerCase() == "jaxdagger")) {double.volume = window.userSoundVolume;double.play()}
            if( command === "equinox" && (user.toLowerCase() == "equanoxqq" || user.toLowerCase() == "jaxdagger")) {equinox.volume = window.userSoundVolume;equinox.play()}
            if( command === "erik" && (user.toLowerCase() == "eriktenacity" || user.toLowerCase() == "jaxdagger")) {erik.volume = window.userSoundVolume;erik.play()}
            if( command === "erzaskill" && (user.toLowerCase() == "erzaskill" || user.toLowerCase() == "jaxdagger")) {erzaskill.volume = window.userSoundVolume;erzaskill.play()}
            if( command === "fristy" && (user.toLowerCase() == "fristyy" || user.toLowerCase() == "jaxdagger")) {fristy.volume = window.userSoundVolume;fristy.play()}
            if( command === "ghost" && (user.toLowerCase() == "ighostyi_" || user.toLowerCase() == "jaxdagger")) {ghost.volume = window.userSoundVolume;ghost.play()}
            if( command === "gome" && (user.toLowerCase() == "notgomenasai" || user.toLowerCase() == "jaxdagger")) {gome.volume = window.userSoundVolume;gome.play()}
            if( command === "gome" && (user.toLowerCase() == "gomenasai_" || user.toLowerCase() == "jaxdagger")) {gome.volume = window.userSoundVolume;gome.play()}
            if( command === "jet" && (user.toLowerCase() == "jetrvoox" || user.toLowerCase() == "jaxdagger")) {jet.volume = window.userSoundVolume;jet.play()}
            if( command === "joel" && (user.toLowerCase() == "joelkjn" || user.toLowerCase() == "jaxdagger")) {joel.volume = window.userSoundVolume;joel.play()}
            if( command === "jonny" && (user.toLowerCase() == "jonny_rottin" || user.toLowerCase() == "jaxdagger")) {jonny.volume = window.userSoundVolume;jonny.play()}
            if( command === "josue" && (user.toLowerCase() == "vjosuee" || user.toLowerCase() == "jaxdagger")) {josue.volume = window.userSoundVolume;josue.play()}
            if( command === "justice" && (user.toLowerCase() == "justicegg" || user.toLowerCase() == "jaxdagger")) {justice.volume = window.userSoundVolume;justice.play()}
            if( command === "koko" && (user.toLowerCase() == "kokomonkey78" || user.toLowerCase() == "jaxdagger")) {koko.volume = window.userSoundVolume;koko.play()}
            if( command === "looney" && (user.toLowerCase() == "looneychoonzz" || user.toLowerCase() == "jaxdagger")) {looney.volume = window.userSoundVolume;looney.play()}
            if( command === "matoa" && (user.toLowerCase() == "matoakit" || user.toLowerCase() == "jaxdagger")) {matoa.volume = window.userSoundVolume;matoa.play()}
            if( command === "megaty" && (user.toLowerCase() == "megaty97" || user.toLowerCase() == "jaxdagger")) {megaty.volume = window.userSoundVolume;megaty.play()}
            if( command === "mel" && (user.toLowerCase() == "melynara" || user.toLowerCase() == "jaxdagger")) {mel.volume = window.userSoundVolume;mel.play()}
            if( command === "moonshine" && (user.toLowerCase() == "m0onshlne" || user.toLowerCase() == "jaxdagger")) {moonshine.volume = window.userSoundVolume;moonshine.play()}
            if( command === "napo" && (user.toLowerCase() == "el_napo" || user.toLowerCase() == "jaxdagger")) {napo.volume = window.userSoundVolume;napo.play()}
            if( command === "nutes" && (user.toLowerCase() == "nogoodnutes" || user.toLowerCase() == "jaxdagger")) {nutes.volume = window.userSoundVolume;nutes.play()}
            if( command === "panda" && (user.toLowerCase() == "pandaasura" || user.toLowerCase() == "jaxdagger")) {panda.volume = window.userSoundVolume;panda.play()}
            if( command === "perpurple" && (user.toLowerCase() == "perpurpler" || user.toLowerCase() == "jaxdagger")) {perpurple.volume = window.userSoundVolume;perpurple.play()}
            if( command === "philipeace" && (user.toLowerCase() == "philipeace" || user.toLowerCase() == "jaxdagger")) {philipeace.volume = window.userSoundVolume;philipeace.play()}
            if( command === "potter" && (user.toLowerCase() == "pottersauce" || user.toLowerCase() == "jaxdagger")) {potter.volume = window.userSoundVolume;potter.play()}
            if( command === "primal" && (user.toLowerCase() == "primalcinder" || user.toLowerCase() == "jaxdagger")) {primal.volume = window.userSoundVolume;primal.play()}
            if( command === "ross" && (user.toLowerCase() == "rxsstv" || user.toLowerCase() == "jaxdagger")) {ross.volume = window.userSoundVolume;ross.play()}
            if( command === "shadisy" && (user.toLowerCase() == "shadisy" || user.toLowerCase() == "jaxdagger")) {shadisy.volume = window.userSoundVolume;shadisy.play()}
            if( command === "shaunzom" && (user.toLowerCase() == "shaunzomgaming" || user.toLowerCase() == "jaxdagger")) {shaunzom.volume = window.userSoundVolume;shaunzom.play()}
            if( command === "shundrie" && (user.toLowerCase() == "shundrie" || user.toLowerCase() == "jaxdagger")) {shundrie.volume = window.userSoundVolume;shundrie.play()}
            if( command === "sockie" && (user.toLowerCase() == "sockiex" || user.toLowerCase() == "jaxdagger")) {sockie.volume = window.userSoundVolume;sockie.play()}
            if( command === "sonny" && (user.toLowerCase() == "sonnyinchaines" || user.toLowerCase() == "jaxdagger")) {sonny.volume = window.userSoundVolume;sonny.play()}
            if( command === "spacko" && (user.toLowerCase() == "mr_spacko" || user.toLowerCase() == "jaxdagger")) {spacko.volume = window.userSoundVolume;spacko.play()}
            if( command === "steffknight" && (user.toLowerCase() == "steffknight" || user.toLowerCase() == "jaxdagger")) {steffknight.volume = window.userSoundVolume;steffknight.play()}
            if( command === "swoopy" && (user.toLowerCase() == "swoopyyyyy" || user.toLowerCase() == "jaxdagger")) {swoopy.volume = window.userSoundVolume;swoopy.play()}
            if( command === "taco" && (user.toLowerCase() == "tacostandqueen" || user.toLowerCase() == "jaxdagger")) {taco.volume = window.userSoundVolume;taco.play()}
            if( command === "tickle" && (user.toLowerCase() == "ticklemedildoe" || user.toLowerCase() == "jaxdagger")) {tickle.volume = window.userSoundVolume;tickle.play()}
            if( command === "toby" && (user.toLowerCase() == "tobyeee" || user.toLowerCase() == "jaxdagger")) {toby.volume = window.userSoundVolume;toby.play()}
            if( command === "torstie" && (user.toLowerCase() == "torstie" || user.toLowerCase() == "jaxdagger")) {torstie.volume = window.userSoundVolume;torstie.play()}
            if( command === "total" && (user.toLowerCase() == "totalverzockthd" || user.toLowerCase() == "jaxdagger")) {total.volume = window.userSoundVolume;total.play()}
            if( command === "treatfly" && (user.toLowerCase() == "treatfly" || user.toLowerCase() == "jaxdagger")) {treatfly.volume = window.userSoundVolume;treatfly.play()}
            if( command === "turtle" && (user.toLowerCase() == "theturtlechrist" || user.toLowerCase() == "jaxdagger")) {turtle.volume = window.userSoundVolume;turtle.play()}
            if( command === "twists" && (user.toLowerCase() == "twists20g" || user.toLowerCase() == "jaxdagger")) {twists.volume = window.userSoundVolume;twists.play()}
            if( command === "vulpix" && (user.toLowerCase() == "vulpixow" || user.toLowerCase() == "jaxdagger")) {vulpix.volume = window.userSoundVolume;vulpix.play()}
            if( command === "waddell" && (user.toLowerCase() == "cwaddell98" || user.toLowerCase() == "jaxdagger")) {waddel.volume = window.userSoundVolume;waddell.play()}
            if( command === "yosh" && (user.toLowerCase() == "yosh_bts" || user.toLowerCase() == "jaxdagger")) {yosh.volume = window.userSoundVolume;yosh.play()}
            if( command === "karma" && (user.toLowerCase() == "karmaizabeach" || user.toLowerCase() == "jaxdagger")) {karma.volume = window.userSoundVolume;karma.play()}
            if( command === "kylie" && (user.toLowerCase() == "ザベスト" || user.toLowerCase() == "jaxdagger")) {kylie.volume = window.userSoundVolume;kylie.play()}
            if( command === "playsound" && approvedUser.includes(user.toLowerCase())) {
                switch (message) {
                    case "bhagt":
                        bhagt.volume = window.soundVolume;
                        bhagt.play()
                        break;
                    case "jeopardy":
                        jeopardy.volume = window.soundVolume;
                        jeopardy.play()
                        break;
                    case "wood":
                        wood.volume = window.soundVolume;
                        wood.play()
                        break;
                    case "0":
                        bhagt.volume = window.soundVolume;
                        bhagt.play()
                        break;
                    case "1":
                        jeopardy.volume = window.soundVolume;
                        jeopardy.play()
                        break;
                    case "2":
                        wood.volume = window.soundVolume;
                        wood.play()
                        break;
                }
            }
            if (command === "moist" && flags.vip){
                moist.volume = window.userSoundVolume;moist.play()
            }

            if( command === "tts" && approvedUser.includes(user.toLowerCase())) {
                switch (user.toLowerCase()) {
                    case "densebunny":
                        speakMessage( message, "Amy" )
                        break;
                    case "thatgravyboat":
                        speakMessage( message, "Brian" )
                        break;
                }
            }


            if( command === "pausesound" && approvedUser.includes(user.toLowerCase())) {
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
            if( command === "soundvolume" && approvedUser.includes(user.toLowerCase())) {
                if (message <= 1) {
                    window.soundVolume = message;
                    ComfyJS.Say( "/me Volume set to " + parseFloat(soundVolume).toFixed(2));
                }
                else {
                    ComfyJS.Say( "/me Set volume from a number between 0.0 and 1.0");
                }
            }
            if( command === "usersoundvolume" && approvedUser.includes(user.toLowerCase())) {
                if (message <= 1) {
                    window.userSoundVolume = message;
                    ComfyJS.Say( "/me User sound volume set to " + parseFloat(userSoundVolume).toFixed(2));
                }
                else {
                    ComfyJS.Say( "/me Set volume from a number between 0.0 and 1.0");
                }
            }

            if( command === "gravystestsound" && approvedUser.includes(user.toLowerCase())) {
                var sound = new Audio(message);
                sound.volume = window.soundVolume;
                sound.play()
            }
            if( command === "gravystestsoundstop" && approvedUser.includes(user.toLowerCase())) {
                sound.pause()
                sound.currentTime = 0;
            }
            //Rewards
            if (command.length > -1 && extra.customRewardId == "5606c07b-ddc3-460a-aeb0-98b1533c9824") {addpoints(user, 500)}
            if (command.length > -1 && extra.customRewardId == "d39efd20-8dad-4578-9ee8-c854809ade1b") {addpoints(user, 2000)}
            if (command.length > -1 && extra.customRewardId == "c2f5aa38-ddd3-42c6-9b6a-5edd93a2317b") {redeem('5cd16535d6b486305283ce5e')}
        }
        ComfyJS.Init( "BotDagger", "oauth:" + params.get( "oauth" ), "JaxDagger" );