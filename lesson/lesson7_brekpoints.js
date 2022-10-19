const developName ='Max'
const programmingLang='JavaScript'

const programminglangs={
    JavaScript: 'javaScript',
    nodeJS: 'NodeJS',
}
if (programmingLang === programminglangs.JavaScript){
    console.log(`${developName} является FrontEnd разработчиком`)
} else if (programmingLang===programminglangs.nodeJS){
    console.log(`${developName} является Back-End разработчиом`)
}else {
    console.log(`ЯЗык программирования у разработчика ${developName} неопределен`)
}