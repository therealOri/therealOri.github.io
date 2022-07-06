function generate() {
    let dictionary = '';
    if (document.getElementById('uppercaseCb').checked) {
        dictionary += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (document.getElementById('lowercaseCb').checked) {
        dictionary += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (document.getElementById('digitsCb').checked) {
        dictionary += '1234567890';
    }
    if (document.getElementById('symbolsCb').checked) {
        dictionary += "!=<>'@#$%^&*()[]{},.;:-_/\\+?*|`€≡‗";
    }
    if (document.getElementById('unicodeCb').checked) {
        dictionary += '¡¢£¤¥¦§¨©ª«¬®™️¯°±²³´µ¶·¸¹º»¼½¾¿×Ø÷øÞßƒðÐıæ𐐘𐑀ඞඕᔕ';
    }
    if (document.getElementById('emojisCb').checked) {
        dictionary += '⚔☣️⚛️〰️🗝️🔒⛓️✨🫠🫧🫥💢';
    }
    if (document.getElementById('aboxesCb').checked) {
        dictionary += '░▒▓█▄▀■';
    }
    if (document.getElementById('adboxCb').checked) {
        dictionary += '╣╗╝┴┬╩╦═╬';
    }
    if (document.getElementById('koreanCb').checked) {
        dictionary += 'ㅂㅋㅎㅭㅱㅶㅹㅺㅿㆁㆄㆅ';
    }
    if (document.getElementById('russianCb').checked) {
        dictionary += 'БГДЁЖИЙЛПФфЦЧШЩЪЫЬЭЮЯ';
    }
    if (document.getElementById('greekUCb').checked) {
        dictionary += 'ΓΔΘΛΞΠΣΦΨΩ';
    }
    if (document.getElementById('greekLCb').checked) {
        dictionary += 'αβγδεζηθικλμνξπρστυφχψω';
    }
    if (document.getElementById('portuLCb').checked) {
        dictionary += 'ãáàâçéêíõóôúü';
    }
    if (document.getElementById('portuUCb').checked) {
        dictionary += 'ÃÁÀÂÇÉÊÍÕÓÔÚÜ';
    }
    if (document.getElementById('hindiCb').checked) {
        dictionary += 'ऄअआइईउऊऋऌऍऎएऐऑऒओऔकखगघङचछजझञटठडढणतथदधनऩपफबभमयरऱलळऴवशषसहऽॐॠॡ।॥०१२३४५६७८९॰ॲॳॴॵॶॷॹॺॻॼॽॾॿೱೲऀँंःऺऻ़ािीुूृॄॅॆेैॉॊोौ्ॎॏ॒॑॓॔ॕॖॗॢॣ';
    }
    if (document.getElementById('arabicCb').checked) {
        dictionary += "شسژزڑرذڈدخحچجثٹتپبآاےیھہوںنملگکقفغعظطضصءئؤڙڐٿ٘ ًَُِّٰٗ؟،۰۱۲۳۴۵۶۷۸۹";
    }
    if (document.getElementById('amharicCb').checked) {
        dictionary += 'ሀሁሂሃሄህሆሎልሌላሊሉለሐሑሒሓሔሕሖሞምሜማሚሙመሠሡሢሣሤሥሦሮርሬራሪሩረሰሱሲሳሴስሶሾሽሼሻሺሹሸቀቁቂቃቄቅቆቦብቤባቢቡበቨቩቪቫቬቭቮቶትቴታቲቱተቸቹቺቻቼችቾኆኅኄኃኂኁኀነኑኒናኔንኖኞኝኜኛኚኙኘአኡኢኣኤእኦኮክኬካኪኩከኸኹኺኻኼኽኾዎውዌዋዊዉወዐዑዒዓዔዕዖዞዝዜዛዚዙዘዠዡዢዣዤዥዦዮይዬያዪዩየደዱዲዳዴድዶጆጅጄጃጂጁጀገጉጊጋጌግጎጦጥጤጣጢጡጠጨጩጪጫጬጭጮጶጵጴጳጲጱጰጸጹጺጻጼጽጾፆፅፄፃፂፁፀፈፉፊፋፌፍፎፖፕፔፓፒፑፐ፩፪፫፬፭፮፯፰፱፲፳፴፵፶፷፸፹፺፻፼፡።፣፤፥';
    }
    /*
    if (document.getElementById('everything').checked) {
        document.getElementById("uppercaseCb").checked = true;
        document.getElementById("lowercaseCb").checked = true;
        document.getElementById("digitsCb").checked = true;
        document.getElementById("symbolsCb").checked = true;
        document.getElementById("unicodeCb").checked = true;
        document.getElementById("emojisCb").checked = true;
        document.getElementById("aboxesCb").checked = true;
        document.getElementById("adboxCb").checked = true;
        document.getElementById("koreanCb").checked = true;
        document.getElementById("russianCb").checked = true;
        document.getElementById("greekUCb").checked = true;
        document.getElementById("greekLCb").checked = true;
        document.getElementById("portuLCb").checked = true;
        document.getElementById("portuUCb").checked = true;
        document.getElementById("hindiCb").checked = true;
        document.getElementById("arabicCb").checked = true;
        document.getElementById("amharicCb").checked = true;
    }
    */
    

    const length = document.querySelector('input[type="range"]').value;
    if (length < 1 || dictionary.length === 0) {
        return;
    }

    let password = '';
    for (let i =0; i < length; i++) {
        const pos = Math.floor(Math.random() * dictionary.length);
        password += dictionary[pos];
    }

    document.querySelector('input[type="text"]').value = password;
}

[...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach(elem => {
    elem.addEventListener('click', generate);
});

document.querySelector('input[type="range"]').addEventListener('input', e => {
    document.querySelector('div.range span').innerHTML = e.target.value;
    generate();
});


/*
document.querySelector('div.password button').addEventListener('click', () => {
    //const pass = document.querySelector('input[type="text"]').value;
    var pass = document.getElementById("ptxt");
    pass.select();
    pass.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(pass).then(() => {
        alert("Copied: " + pass.value + " to the clipboard!");
    })
});
*/

//This actually works for copying to the clipboard.
function copyToClipBoard() {

    var copyText = document.getElementById('myInput');
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Copied: " + copyText.value + " to the clipboard!");
}



generate();