async function typewriteText(text,elem){
    for (let i = 0; i < text.length; i++) {
        await sleep(50)
        elem.innerHTML += text[i];
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function onPageLoad(){
    await sleep(800);
    await typewriteText("Porter Libby", document.getElementById('term_text'));
}

onPageLoad()