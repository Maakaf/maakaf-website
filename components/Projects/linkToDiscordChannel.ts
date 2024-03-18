const MAAKAF_SERVER_ID = "1089589164707684443"

const PROJECT_CHANNELS_IDS : { [key: string]: string } = {
 "url-title-preview": "1216300095931158558",
 "progit2" : "1216603861071040572",
 "MAAKAF_MeOnTheLine" : "1215351169225064448",
 "cboard":"1213401866961162291",
 "lite-fifo": "1212668320273408041",
 "caspion": "1137747025081946312",
 "overlay" : "1101157903093747833",
 "2ms": "1118614587609198735",
 "configu": "1191310798518243438",
 "emojiPicker": "1111604241048535042",
 "mappingthestudio64bit": "1170314519348785152",
 "keep": "1188512417181863956",
 "Kef-Code" : "1156691589922562058",
 "redberry-crm" : "1196012132513366026",
 "github-readme-youtube-cards" : "1150648666781139044",
 "github-readme-streak-stats" : "1150648983098769418",
 "readme-typing-svg" : "1150649218717995078",
 "mapping-rs" : "1144877273091149875",
 "cocmd" : "1168156294469926942",
 "emoji-picker-react" : "1111604241048535042",
 "reduced.to" : "1101859074359955517",
 "open-bus-map-search" : "1150649893799608401",
 "open-bus-stride-api" : "1150650094140522619",
 "kor" : "1141416526784757813"
}

export const getChannelUrl = (projectName : string) => {
    let projectDiscordChannel  = PROJECT_CHANNELS_IDS[projectName] || "";
    return `https://discord.com/channels/${MAAKAF_SERVER_ID}/${projectDiscordChannel}`
}