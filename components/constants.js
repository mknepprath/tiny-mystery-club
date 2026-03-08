export const FACING = {
  Bottom: "down",
  Left: "left",
  Right: "right",
  Top: "up",
};

export const MOVE = {
  DOWN: "Bottom",
  LEFT: "Left",
  RIGHT: "Right",
  UP: "Top",
};

export const NPCS = [
  { id: "fern", name: "Fern", spawn: { y: 5, x: 5 }, spriteType: "sprite" },
  { id: "rex", name: "Rex", spawn: { y: 10, x: 8 }, spriteType: "lion" },
  { id: "bubbles", name: "Bubbles", spawn: { y: 11, x: 16 }, spriteType: "peng" },
  { id: "marlo", name: "Marlo", spawn: { y: 22, x: 22 }, spriteType: "lion" },
  { id: "pip", name: "Pip", spawn: { y: 20, x: 28 }, spriteType: "sprite" },
  { id: "grumbles", name: "Grumbles", spawn: { y: 8, x: 38 }, spriteType: "lion" },
  { id: "puddle", name: "Puddle", spawn: { y: 40, x: 22 }, spriteType: "peng" },
  { id: "waddles", name: "Waddles", spawn: { y: 42, x: 25 }, spriteType: "peng" },
];

export const NPC_DIALOGUE = {
  fern: (state) => {
    if (state.mystery4?.solved) return "the frost amulet is back in the lake where it belongs... the flowers are bloomin again. nature heals";
    if (state.mystery4?.active) return "the flowers near my rocks r frozen solid... somethin cold passed thru here. the moss is cryin";
    if (state.mystery3?.solved) return "the forest is singin again... bubbles music is actually kinda nice when it aint stolen";
    if (state.mystery3?.active) return "i keep hearin music at nite... its comin from the lake. the rocks are vibin but im worried";
    if (state.mystery2.solved) return "the crystal came from deep in the forest... it belonged to the rocks. rex should return it";
    if (state.mystery2.active) return "somethin feels off in the forest lately... the rocks are uneasy. i can feel it in the moss";
    if (state.solved) return "the forest is peaceful again now that the mystery is solved";
    return "the forest is nice,,, i like the rocks they are my friends";
  },
  rex: (state) => {
    if (state.mystery4?.solved) return "puddle had a FROST AMULET?? thats way cooler than my crystal honestly... pun intended";
    if (state.mystery4?.active) return "the rocky hills r covered in frost... in the middle of summer?? somethin weird is goin on. i keep findin ice on my favorite sunbathin rock";
    if (state.mystery3?.solved) return "bubbles was stealin instruments?? and i thought MY crystal thing was bad lol";
    if (state.mystery3?.active) return "someones been takin stuff from the rocky hills... i saw scratch marks on the rocks where my drum used to sit";
    if (state.mystery2.solved) return "ok fine... i found the crystal in the forest. i just thought it was pretty... i didnt know it was scarin everyone. sorry...";
    if (state.mystery2.active) {
      const m2ClueCount = Object.values(state.mystery2.clues).filter(Boolean).length;
      if (state.mystery2.clues.crystal || m2ClueCount >= 2)
        return "the shadows?? oh those are nothin... probably just trees... definitely not caused by anythin in particular haha";
      return "shadows?? haha what shadows i havent seen any shadows... nope... not me";
    }
    if (state.solved) return "good work detective... the forest rests easy tonite";
    if (state.clues.witness)
      return "marlo saw someone too?? so it wasnt just noises... this is serious";
    return "i heard a loud noise last nite comin from the village... probably nothin tho";
  },
  bubbles: (state) => {
    if (state.mystery4?.solved) return "puddle was freezin everything?? no wonder the pond was so cold lately!! mystery pengs strike again";
    if (state.mystery4?.active) return "the pond is SO cold lately... like colder than normal. and theres frost on the lily pads?? in summer??";
    if (state.mystery3?.solved) return "ok ok i took the instruments... i just wanted to make a lil underwater orchestra... the acoustics down there r amazing tho";
    if (state.mystery3?.active) {
      const m3ClueCount = Object.values(state.mystery3.clues).filter(Boolean).length;
      if (m3ClueCount >= 3) return "music?? instruments?? i dont know what ur talkin about haha... *nervous bubbling*";
      if (m3ClueCount >= 1) return "la la la just swimmin around... nothin to see here... definitely not hidin anythin underwater haha";
      return "the pond is so peaceful... i could stay here forever... just me and the... water...";
    }
    if (state.mystery2.solved) return "rex had a crystal?? lions are so weird sometimes...";
    if (state.mystery2.active) return "have u seen the shadows at nite?? theyre super creepy... i stay in the pond now";
    if (state.solved) return "wow cant believe it was waddles all along...";
    if (state.clues.gossip)
      return "waddles has been weird?? now that u mention it she did seem stressed lately...";
    return "the pond is nice today... wish the lake was this calm";
  },
  marlo: (state) => {
    if (state.mystery4?.solved) return "FOUR mysteries?? im startin to think this town attracts trouble. at least we got u";
    if (state.mystery4?.active) return "i saw ice patches on the path between the lake and the village this mornin... its the middle of summer!! someones walkin around freezin stuff";
    if (state.mystery3?.solved) return "three mysteries solved... this town needs to get it together honestly";
    if (state.mystery3?.active) return "i keep hearin music at nite comin from the lake... its actually kinda pretty but also... where r all the instruments goin??";
    if (state.mystery2.solved) return "mysteries keep happenin around here... good thing we got a detective";
    if (state.mystery2.active) return "the shadows are freakin me out... i saw one near the forest last nite and almost fainted";
    if (state.solved) return "i knew it!! i knew what i saw that nite";
    if (state.clues.witness && state.clues.gossip)
      return "like i said... i saw somone waddling toward the lake carryin somethin shiny... and now that u mention it puddle said waddles has been actin weird too... u might wanna check the lake area";
    if (state.clues.witness)
      return "like i said... i saw somone waddling toward the lake carryin somethin shiny";
    return "i saw somone waddling near town hall last nite... they were carryin somethin shiny. they went toward the lake";
  },
  pip: (state) => {
    if (state.mystery4?.solved) return "a frost amulet from the bottom of the lake?? this town has the WILDEST artifacts";
    if (state.mystery4?.active) return "i saw puddle walkin around late last nite near the village... she was wearin somethin shiny around her neck. it was glowin blue";
    if (state.mystery3?.solved) return "bubbles had a whole orchestra down there?? thats actually kinda cool... but also theft";
    if (state.mystery3?.active) return "i found a wet trail leadin from the village toward the lake... someone keeps draggin somethin heavy that way";
    if (state.mystery2.solved) return "rex had a CRYSTAL?? that explains the shadows!!";
    if (state.mystery2.active) return "i saw weird shadows movin around last nite... they were comin from the forest direction. it was real creepy";
    if (state.solved) return "u actually solved it!! ur like a real detective!!";
    return "i dont know whats goin on but everyone seems upset... did somethin happen??";
  },
  grumbles: (state) => {
    if (state.mystery4?.solved) return "puddle was freezin my nappin rocks?? no WONDER they were so cold. i thought i was gettin old";
    if (state.mystery4?.active) return "theres ICE on my nappin rocks!! ICE!! its summer!! whoever is doin this is ruinin my naps and thats a CRIME";
    if (state.mystery3?.solved) return "an underwater concert?? pengs r weird. but i kinda wanna hear it ngl";
    if (state.mystery3?.active) return "my favorite nappin rock had a flute sittin on it and now its GONE. who takes a flute from a nappin rock??";
    if (state.mystery2.solved) return "rex and his shiny rocks... typical lion behavior honestly";
    if (state.mystery2.active) return "those shadows better stay away from me... i aint scared tho... ok maybe a lil scared";
    if (state.solved) return "see i told u it wasnt me!! ...not that anyone accused me... right??";
    if (state.clues.footprints)
      return "wait webbed feet?? see i TOLD u it wasnt me! lions dont have webbed feet";
    return "haha wouldnt it be funny if i took the trophy... jk jk... unless?";
  },
  puddle: (state) => {
    if (state.mystery4?.solved) return "i didnt mean to freeze anythin!! the amulet was so pretty... it made me feel sparkly inside. i didnt know it was freezin stuff behind me...";
    if (state.mystery4?.active) {
      const m4ClueCount = Object.values(state.mystery4.clues).filter(Boolean).length;
      if (m4ClueCount >= 3) return "f-frozen flowers?? ice on the path?? t-thats so weird haha... i have NO idea whats causin that... *shivering*";
      if (m4ClueCount >= 1) return "the lake has been extra cold lately... i found somethin pretty down there but its probably nothin... just a shiny rock...";
      return "the lake is nice this time of year... i like to take late nite walks around the village. its so peaceful";
    }
    if (state.mystery3?.solved) return "bubbles... i KNEW she was up to somethin. she kept askin me to cover for her swims";
    if (state.mystery3?.active) return "bubbles has been spendin a LOT of time underwater lately... like way more than normal. she keeps divin down and comin back up all happy";
    if (state.mystery2.solved) return "glad the shadow thing is over... i was havin nightmares";
    if (state.mystery2.active) return "the shadows are scarin everyone at the lake... even the fish are hidin";
    if (state.solved) return "i cant believe waddles did that... but im glad the mystery is solved";
    if (state.clues.gossip && state.clues.witness)
      return "wait marlo SAW someone?? heading this way?? waddles was out that nite...";
    if (state.clues.gossip)
      return "i hope waddles is ok... she keeps disappearin behind the waterfall";
    return "waddles has been actin real weird lately... she keeps goin behind the waterfall and wont tell me why";
  },
  waddles: (state) => {
    if (state.mystery4?.solved) return "puddle freezin the whole town?? at least MY crime didnt involve magic artifacts lol";
    if (state.mystery4?.active) return "frozen flowers everywhere... this town is WILD. glad its not my fault this time... again";
    if (state.mystery3?.solved) return "bubbles stealin stuff?? wow who woulda thought... *looks around nervously*";
    if (state.mystery3?.active) return "instruments goin missin?? ha well at least its not ME this time right... RIGHT??";
    if (state.mystery2.solved) return "at least im not the troublemaker this time haha... sorry rex";
    if (state.mystery2.active) return "shadows?? finally someone else is in trouble and not me lol";
    if (state.solved)
      return "ok FINE i took it!! it belonged to us pengs first!!! we built it with our own flippers!!!";
    const clueCount = Object.values(state.clues).filter(Boolean).length;
    if (clueCount >= 4)
      return "l-look i didnt do anythin ok?? stop lookin at me like that";
    if (clueCount >= 2)
      return "why are u askin so many questions... im just a normal peng mindin my own business";
    return "im just a normal peng... nothin weird goin on here haha";
  },
  // Interior NPCs
  rory: (state) => {
    if (state.mystery4?.solved) return "FOUR mysteries!! this town owes u everything!! im namin a street after u!!";
    if (state.mystery4?.active) return "flowers r freezin!! paths r icy!! its the middle of SUMMER!! someone or somethin is causin this and we need answers!!";
    if (state.mystery3?.solved) return "THREE mysteries solved!! u r officially the towns greatest detective!! i should make u a badge";
    if (state.mystery3?.active) return "instruments keep vanishin!! the town band cant practice!! pls figure out whats goin on";
    if (state.mystery2.solved) return "both mysteries solved!! ur the best detective this town has ever seen!!";
    if (state.mystery2.active) return "any leads on the shadow situation?? ppl are gettin real nervous...";
    if (state.solved) return "the trophy is back!! thank u so much!!";
    return "the golden trophy is GONE!! someone stole it!! pls help us find who did it";
  },
  dusty: (state) => {
    if (state.mystery4?.solved) return "frost amulets... ancient lake artifacts... i need to write a whole encyclopedia about this town";
    if (state.mystery4?.active) return "my books r gettin damp from all the frost meltin... whoever is causin this needs to stop. the pages r wrinkling";
    if (state.mystery3?.solved) return "underwater acoustics... fascinatin. i should write a book about this case";
    if (state.mystery3?.active) return "my reading lamp keeps disappearin... wait thats not an instrument. but SOMETHIN is fishy around here";
    if (state.mystery2.solved) return "crystals that project shadows... i think i read about those once. ancient stuff";
    if (state.mystery2.active) return "the lights in here keep flickerin... i cant read my books like this. somethin strange is goin on";
    if (state.solved) return "the books always held the answer... history repeats itself";
    return "i read a book once it said pengs used to live here before anyone else... interestin huh";
  },
};

export const NPC_REACTIONS = {
  marlo: {
    footprints: "webbed feet?? hmm that rules me out at least... only pengs have webbed feet",
    witness: "yea thats what i saw... i know what i saw",
    note: "pengs built the trophy?? i had no idea... thats a pretty good motive",
    gossip: "waddles goin behind the waterfall... and i saw someone heading toward the lake... thats suspicious",
    caveEvidence: "sparkles in the cave behind the waterfall?? sounds like somone hid somethin there",
  },
  waddles: {
    footprints: "w-webbed feet?? lots of animals have webbed feet haha... not just pengs...",
    witness: "waddling?? i ALWAYS waddle thats just how i walk!! doesnt prove anythin",
    note: "...where did u find that",
    gossip: "puddle doesnt know what shes talkin about!! i go behind the waterfall to... uh... meditate",
    caveEvidence: "...i dont know anythin about any sparkles",
  },
  puddle: {
    footprints: "webbed feet like a peng... oh no... u dont think...",
    witness: "someone heading toward the lake?? i was asleep by then... but waddles was still up",
    note: "a note about pengs owning the trophy?? i mean we DID build it but stealing isnt the answer...",
    gossip: "i already told u about waddles... im worried about her tbh",
    caveEvidence: "the cave behind the waterfall?? thats exactly where waddles keeps goin!!",
  },
  grumbles: {
    footprints: "webbed feet?? see it wasnt me!! lions dont have webbed feet!! ...not that i did it anyway",
    witness: "waddling?? lions dont waddle we STRIDE. very different",
    note: "a note from a peng?? sounds like u got ur suspect right there",
    gossip: "waddles actin weird huh?? always thought she was up to somethin",
    caveEvidence: "a cave?? i dont go near caves. too spooky",
  },
  pip: {
    footprints: "footprints?? oh wow ur like a real detective huh",
    note: "whoa thats a real clue... ur gettin close i can feel it",
    default: "i dont know much about that sorry... im not very good at mysteries",
  },
  fern: {
    default: "hmm thats interestin but i mostly just know about rocks and trees sorry",
  },
  rex: {
    footprints: "webbed feet... that narrows it down. not many animals around here with those",
    witness: "so marlo saw someone too?? i heard noises... maybe we both witnessed the same thing",
    default: "hmm i dunno much about that... i was in the forest all night",
  },
  bubbles: {
    footprints: "oh no webbed feet... thats a peng thing... but surely no peng would steal",
    gossip: "waddles has been weird?? now that u mention it she did seem stressed lately...",
    default: "sorry i was in the pond... i dont know much",
  },
  // Interior NPCs
  rory: {
    footprints: "WEBBED FEET?? in MY town hall?? this is an outrage!!",
    witness: "someone heading toward the lake with somethin shiny... keep investigatin!!",
    note: "the pengs built the trophy?? i... actually didnt know that... still doesnt justify theft tho!!",
    gossip: "waddles... behind the waterfall... hmm very suspicious indeed...",
    caveEvidence: "evidence in the cave?? ur gettin close i can feel it!! find all the clues!!",
  },
  dusty: {
    note: "ah yes... the history of the trophy. pengs were the original craftspeople here. its all in the books",
    footprints: "webbed feet would be consistent with what i read about peng anatomy...",
    default: "hmm i might have read somethin about that... let me think... nah i forgot",
  },
};

export const NPC_REACTIONS_M2 = {
  rex: {
    crystal: "w-where did u find that?! ...i mean... whats that... never seen it before...",
    shadows: "shadows?? i havent seen any shadows... definitely not...",
    flickering: "flickerin lights?? weird... nothin to do with me tho...",
    confession: "...ok u got me",
    default: "i dunno what ur talkin about haha",
  },
  pip: {
    shadows: "yea thats what i saw!! creepy shadows from the forest direction",
    crystal: "whoa a crystal?? thats so cool... and kinda spooky",
    default: "i dont know much about that... but the shadows were def real",
  },
  fern: {
    crystal: "that crystal... it belongs to the deep forest. someone took it from where it rested",
    shadows: "the shadows disturb the rocks... they dont like it",
    default: "the forest knows more than it tells...",
  },
  marlo: {
    shadows: "yea those shadows are everywhere at nite... really freakin me out",
    crystal: "a crystal?? never seen anythin like that before... looks magical",
    default: "i just want the shadows to stop honestly",
  },
  grumbles: {
    shadows: "shadows?? pff im not scared... ok maybe a little",
    crystal: "whoa thats a weird rock... keep it away from me",
    default: "i dunno about any of that stuff",
  },
  puddle: {
    shadows: "the shadows keep showin up near the lake too... its terrifying",
    crystal: "ooh pretty... but also kinda creepy vibes from that thing",
    default: "i just want things to go back to normal...",
  },
  waddles: {
    shadows: "haha shadows... glad its not about me this time",
    crystal: "neat rock i guess... ask someone who cares about rocks",
    default: "not my problem this time lol",
  },
  bubbles: {
    shadows: "the shadows are so scary... i hide in the pond when they show up",
    crystal: "ooh shiny... but also gives me bad vibes",
    default: "sorry i dont know much about that...",
  },
  rory: {
    shadows: "shadows in my town!! this is unacceptable!! find out whos behind it!!",
    flickering: "the library lights too?? this is gettin worse...",
    crystal: "a crystal?? maybe thats connected to the shadows somehow...",
    confession: "so rex knows somethin... interesting...",
    default: "keep investigatin!! we need answers!!",
  },
  dusty: {
    flickering: "yes the lights keep flickerin... very annoyin when ur tryin to read",
    crystal: "fascinatin... ive read about crystals like this. they can refract moonlight in unusual ways",
    shadows: "shadows in the library too... the books dont like the dark",
    default: "hmm let me check my books... actually i forgot what i was lookin for",
  },
};

export const NPC_REACTIONS_M3 = {
  bubbles: {
    melody: "m-music?? i dont hear any music haha... must be the wind...",
    instrument: "a broken flute?? oh no thats terrible... who would do such a thing... *sweating*",
    wetTrail: "wet trails?? well i AM a peng we r always wet... thats not evidence of anythin!!",
    underwater: "underwater sounds?? thats just... uh... fish. very musical fish.",
    default: "la la la i dont know anythin about anythin...",
  },
  puddle: {
    melody: "music from the lake?? now that u mention it i have heard somethin at nite... i thought i was dreamin",
    instrument: "a broken flute?? someone really doesnt want these instruments found...",
    wetTrail: "a wet trail to the lake... and bubbles has been divin a lot... oh no",
    underwater: "sounds underwater?? bubbles has been down there for HOURS lately...",
    default: "hmm im startin to think bubbles knows more than shes lettin on...",
  },
  waddles: {
    melody: "music?? i been hearin it too. kinda catchy honestly",
    instrument: "someone broke a flute?? thats messed up even by my standards",
    wetTrail: "wet trail to the lake huh... thats a peng trail for sure... but it wasnt ME this time i swear",
    default: "glad im not the suspect for once lol",
  },
  rex: {
    melody: "music at nite?? yea i heard it from the rocky hills... thought grumbles was snorin again",
    instrument: "a flute from the rocky hills?? grumbles was complainin about his stuff goin missin",
    wetTrail: "wet trail... so its someone who swims a lot... narrows it down",
    default: "i dunno much about music honestly",
  },
  fern: {
    melody: "the forest hears the music too... its comin from deep in the lake",
    instrument: "someone is collectin instruments... the rocks whisper about it",
    underwater: "the water sings now... someone has made a place of music beneath the waves",
    default: "the forest knows the music comes from the water...",
  },
  pip: {
    wetTrail: "yea thats the trail i found!! it goes straight to the lake shore",
    instrument: "a broken flute?? whoever is takin these isnt bein careful with em",
    melody: "i heard the music too!! its def comin from the lake area",
    default: "this mystery is wild... instruments just vanishin??",
  },
  marlo: {
    melody: "music from the lake at nite... beautiful but suspicious",
    instrument: "instruments goin missin from all over town... someone is collectin them",
    wetTrail: "a wet trail... so its a water creature... interesting",
    default: "another mystery... u got this detective",
  },
  grumbles: {
    instrument: "THATS FROM MY NAPPIN ROCK!! someone stole the flute right off it!!",
    melody: "i been hearin that music too... its keepin me awake and thats UNFORGIVABLE",
    wetTrail: "wet footprints?? its a peng!! ...or a very wet lion. but probably a peng",
    default: "whoever is doin this is messin with my naps and thats a crime",
  },
  rory: {
    melody: "music from the lake?? the town band hasnt practiced in weeks cuz all their instruments r gone!!",
    instrument: "evidence of the stolen instruments!! keep searchin!!",
    wetTrail: "a wet trail... so the thief lives near water... interesting...",
    underwater: "sounds comin from underwater?? maybe thats where all the instruments went!!",
    default: "find all the clues and report back!!",
  },
  dusty: {
    melody: "music underwater... i read about aquatic acoustics once. sound travels beautifully through water",
    instrument: "someone is buildin a collection... but for what purpose?",
    underwater: "underwater music... fascinatin. the pressure would actually enhance the resonance...",
    default: "hmm let me think... actually i forgot what i was thinkin about",
  },
};

export const NPC_REACTIONS_M4 = {
  puddle: {
    frozenFlowers: "f-frozen flowers?? thats so sad... i wonder what could cause that... *tugs at necklace nervously*",
    coldTrail: "ice on the path?? w-well water freezes sometimes right?? totally normal...",
    amulet: "t-thats... thats not mine!! i mean... whats an amulet?? i dont even know what that word means!!",
    puddleSlip: "...ok u got me",
    default: "i d-dont know anythin about any frost... *shivering intensifies*",
  },
  grumbles: {
    frozenFlowers: "the flowers by my nappin spot r frozen!! FROZEN!! its ruinin the ambiance",
    coldTrail: "ice on the path near the lake?? so the cold is comin FROM the lake direction... interesting",
    amulet: "a glowin amulet?? thats some ancient magic stuff right there. who would wear that??",
    default: "whoever is freezin my rocks needs to STOP",
  },
  pip: {
    frozenFlowers: "frozen flowers in summer... thats not natural. somethin magical is goin on",
    coldTrail: "the ice trail goes from the lake through the village... someone walks this path every nite",
    amulet: "a frost amulet!! that must be what i saw puddle wearin!! it was glowin blue!!",
    default: "i saw someone walkin around at nite with somethin glowin...",
  },
  fern: {
    frozenFlowers: "the flowers... they r suffering. somethin cold and ancient is movin through the village at nite",
    coldTrail: "the cold follows a path... a walking path. someone carries the frost with them",
    amulet: "this amulet... it was buried in the lake for a reason. it was never meant to be worn",
    default: "the frost is not natural... it comes from somethin old and powerful",
  },
  rex: {
    frozenFlowers: "frozen flowers?? even the rocky hills have frost on em... in SUMMER",
    coldTrail: "ice trail from the lake?? so whoever is doin this lives near the water",
    amulet: "a magic amulet?? ok that makes my crystal thing look like nothin lol",
    default: "i dunno about frost stuff... i prefer warm rocks",
  },
  marlo: {
    frozenFlowers: "frozen flowers everywhere... the whole village looks like winter",
    coldTrail: "ice on the path... so someone is walkin around at nite spreadin frost",
    amulet: "a frost amulet from the lake?? who found it down there??",
    default: "this frost mystery is givin me chills... literally",
  },
  waddles: {
    frozenFlowers: "frozen flowers?? weird. at least no one is blamin ME this time",
    coldTrail: "ice trail?? classic mystery stuff. ur gettin good at this",
    amulet: "ooh shiny... wait that looks like the thing puddle was wearin the other day",
    default: "not my problem this time hehe",
  },
  bubbles: {
    frozenFlowers: "the frost is messin up my pond!! the water is too cold for my underwater practice",
    coldTrail: "ice on the path?? ive seen puddle walkin around late at nite... she goes right past my pond",
    amulet: "puddle showed me somethin shiny she found in the lake... it was really cold to touch",
    default: "the cold is messin everything up...",
  },
  rory: {
    frozenFlowers: "FROZEN FLOWERS!! in MY town!! in SUMMER!! this is an outrage of the highest order!!",
    coldTrail: "an ice trail... followin someones nightly walk... keep investigatin!!",
    amulet: "a FROST AMULET?? from the lake?? this is serious magical artifact stuff!! who has it??",
    puddleSlip: "so puddle knows somethin about the amulet... very interesting...",
    default: "find out whos freezin my town!!",
  },
  dusty: {
    frozenFlowers: "unseasonable frost... fascinatin from a scientific perspective. terrible for the garden tho",
    coldTrail: "a trail of ice... consistent with someone carryin a source of extreme cold",
    amulet: "a frost amulet!! ive read about these. ancient artifacts that emit cold energy. very rare and very dangerous if worn",
    default: "frost in summer... the books mention ancient ice artifacts buried in deep water...",
  },
};

const MYSTERY_2_CLUE_KEYS = ["shadows", "flickering", "crystal", "confession"];
const MYSTERY_3_CLUE_KEYS = ["melody", "instrument", "wetTrail", "underwater"];
const MYSTERY_4_CLUE_KEYS = ["frozenFlowers", "coldTrail", "amulet", "puddleSlip"];

export function getNpcReaction(npcId, clueKey) {
  // Check if this is a mystery 4 clue
  if (MYSTERY_4_CLUE_KEYS.includes(clueKey)) {
    const reactions = NPC_REACTIONS_M4[npcId];
    if (!reactions) return "hmm... i dont really know anythin about that";
    if (reactions[clueKey]) return reactions[clueKey];
    if (reactions.default) return reactions.default;
    return "hmm... i dont really know anythin about that";
  }
  // Check if this is a mystery 3 clue
  if (MYSTERY_3_CLUE_KEYS.includes(clueKey)) {
    const reactions = NPC_REACTIONS_M3[npcId];
    if (!reactions) return "hmm... i dont really know anythin about that";
    if (reactions[clueKey]) return reactions[clueKey];
    if (reactions.default) return reactions.default;
    return "hmm... i dont really know anythin about that";
  }
  // Check if this is a mystery 2 clue
  if (MYSTERY_2_CLUE_KEYS.includes(clueKey)) {
    const reactions = NPC_REACTIONS_M2[npcId];
    if (!reactions) return "hmm... i dont really know anythin about that";
    if (reactions[clueKey]) return reactions[clueKey];
    if (reactions.default) return reactions.default;
    return "hmm... i dont really know anythin about that";
  }
  const reactions = NPC_REACTIONS[npcId];
  if (!reactions) return "hmm... i dont really know anythin about that";
  if (reactions[clueKey]) return reactions[clueKey];
  if (reactions.default) return reactions.default;
  return "hmm... i dont really know anythin about that";
}

export const ROOM_NPCS = {
  "/townhall": [
    { id: "rory", name: "Mayor Rory", spawn: { y: 1, x: 3 }, spriteType: "sprite" },
  ],
  "/library": [
    { id: "dusty", name: "Dusty", spawn: { y: 2, x: 3 }, spriteType: "lion" },
  ],
  "/room": [
    { id: "peng-room", name: "Peng", spawn: { y: 2, x: 2 }, spriteType: "peng" },
    { id: "sprite-room", name: "Sprite", spawn: { y: 1, x: 0 }, spriteType: "sprite" },
  ],
};

export const ROCKS = [
  // Original village cluster
  { spawn: { y: 19, x: 19 }, variant: 2 },
  { spawn: { y: 19, x: 20 }, variant: 1 },
  { spawn: { y: 19, x: 21 }, variant: 1 },
  { spawn: { y: 20, x: 18 }, variant: 1 },
  { spawn: { y: 20, x: 22 }, variant: 2 },
  { spawn: { y: 21, x: 19 }, variant: 1 },
  { spawn: { y: 21, x: 20 }, variant: 2 },
  { spawn: { y: 21, x: 22 }, variant: 2 },
  { spawn: { y: 22, x: 22 }, variant: 2 },
  { spawn: { y: 23, x: 20 }, variant: 1 },
  { spawn: { y: 23, x: 21 }, variant: 1 },
  { spawn: { y: 38, x: 38 }, variant: 2 },

  // Forest area (x:2-12, y:2-12) - dense with paths
  { spawn: { y: 2, x: 2 }, variant: 1 },
  { spawn: { y: 2, x: 3 }, variant: 2 },
  { spawn: { y: 2, x: 5 }, variant: 1 },
  { spawn: { y: 2, x: 7 }, variant: 2 },
  { spawn: { y: 2, x: 8 }, variant: 1 },
  { spawn: { y: 2, x: 10 }, variant: 2 },
  { spawn: { y: 2, x: 11 }, variant: 1 },
  { spawn: { y: 3, x: 2 }, variant: 2 },
  { spawn: { y: 3, x: 4 }, variant: 1 },
  { spawn: { y: 3, x: 8 }, variant: 2 },
  { spawn: { y: 3, x: 10 }, variant: 1 },
  { spawn: { y: 3, x: 12 }, variant: 2 },
  { spawn: { y: 4, x: 3 }, variant: 1 },
  { spawn: { y: 4, x: 6 }, variant: 2 },
  { spawn: { y: 4, x: 7 }, variant: 1 },
  { spawn: { y: 4, x: 9 }, variant: 2 },
  { spawn: { y: 4, x: 11 }, variant: 1 },
  { spawn: { y: 5, x: 2 }, variant: 2 },
  { spawn: { y: 5, x: 8 }, variant: 1 },
  { spawn: { y: 5, x: 10 }, variant: 2 },
  { spawn: { y: 6, x: 3 }, variant: 1 },
  { spawn: { y: 6, x: 4 }, variant: 2 },
  { spawn: { y: 6, x: 6 }, variant: 1 },
  { spawn: { y: 6, x: 9 }, variant: 2 },
  { spawn: { y: 6, x: 11 }, variant: 1 },
  { spawn: { y: 7, x: 2 }, variant: 2 },
  { spawn: { y: 7, x: 5 }, variant: 1 },
  { spawn: { y: 7, x: 8 }, variant: 2 },
  { spawn: { y: 7, x: 10 }, variant: 1 },
  { spawn: { y: 8, x: 3 }, variant: 2 },
  { spawn: { y: 8, x: 4 }, variant: 1 },
  { spawn: { y: 8, x: 7 }, variant: 2 },
  { spawn: { y: 8, x: 9 }, variant: 1 },
  { spawn: { y: 8, x: 11 }, variant: 2 },
  { spawn: { y: 9, x: 2 }, variant: 1 },
  { spawn: { y: 9, x: 5 }, variant: 2 },
  { spawn: { y: 9, x: 6 }, variant: 1 },
  { spawn: { y: 9, x: 10 }, variant: 2 },
  { spawn: { y: 10, x: 3 }, variant: 1 },
  { spawn: { y: 10, x: 4 }, variant: 2 },
  { spawn: { y: 10, x: 7 }, variant: 1 },
  { spawn: { y: 10, x: 11 }, variant: 2 },
  { spawn: { y: 11, x: 2 }, variant: 1 },
  { spawn: { y: 11, x: 5 }, variant: 2 },
  { spawn: { y: 11, x: 9 }, variant: 1 },
  { spawn: { y: 11, x: 10 }, variant: 2 },
  { spawn: { y: 12, x: 3 }, variant: 1 },
  { spawn: { y: 12, x: 6 }, variant: 2 },
  { spawn: { y: 12, x: 8 }, variant: 1 },
  { spawn: { y: 12, x: 11 }, variant: 2 },

  // Rocky Hills (x:35-45, y:5-15)
  { spawn: { y: 5, x: 35 }, variant: 2 },
  { spawn: { y: 5, x: 37 }, variant: 1 },
  { spawn: { y: 5, x: 40 }, variant: 2 },
  { spawn: { y: 6, x: 36 }, variant: 1 },
  { spawn: { y: 6, x: 39 }, variant: 2 },
  { spawn: { y: 6, x: 42 }, variant: 1 },
  { spawn: { y: 7, x: 35 }, variant: 2 },
  { spawn: { y: 7, x: 37 }, variant: 1 },
  { spawn: { y: 7, x: 41 }, variant: 2 },
  { spawn: { y: 7, x: 44 }, variant: 1 },
  { spawn: { y: 8, x: 36 }, variant: 2 },
  { spawn: { y: 8, x: 40 }, variant: 1 },
  { spawn: { y: 8, x: 43 }, variant: 2 },
  { spawn: { y: 9, x: 35 }, variant: 1 },
  { spawn: { y: 9, x: 39 }, variant: 2 },
  { spawn: { y: 9, x: 42 }, variant: 1 },
  { spawn: { y: 10, x: 37 }, variant: 2 },
  { spawn: { y: 10, x: 40 }, variant: 1 },
  { spawn: { y: 10, x: 44 }, variant: 2 },
  { spawn: { y: 11, x: 36 }, variant: 1 },
  { spawn: { y: 11, x: 39 }, variant: 2 },
  { spawn: { y: 11, x: 43 }, variant: 1 },
  { spawn: { y: 12, x: 35 }, variant: 2 },
  { spawn: { y: 12, x: 38 }, variant: 1 },
  { spawn: { y: 12, x: 41 }, variant: 2 },

  // Cave entrance area (x:5-10, y:40-45)
  { spawn: { y: 40, x: 5 }, variant: 1 },
  { spawn: { y: 40, x: 7 }, variant: 2 },
  { spawn: { y: 40, x: 9 }, variant: 1 },
  { spawn: { y: 41, x: 6 }, variant: 2 },
  { spawn: { y: 41, x: 10 }, variant: 1 },
  { spawn: { y: 43, x: 6 }, variant: 2 },
  { spawn: { y: 43, x: 7 }, variant: 1 },
  { spawn: { y: 43, x: 9 }, variant: 2 },
  { spawn: { y: 44, x: 5 }, variant: 1 },
  { spawn: { y: 44, x: 10 }, variant: 2 },

  // Village path framing rocks
  { spawn: { y: 15, x: 24 }, variant: 1 },
  { spawn: { y: 15, x: 26 }, variant: 2 },
  { spawn: { y: 16, x: 23 }, variant: 1 },
  { spawn: { y: 16, x: 27 }, variant: 2 },
  { spawn: { y: 17, x: 24 }, variant: 1 },
  { spawn: { y: 17, x: 26 }, variant: 2 },
  { spawn: { y: 18, x: 25 }, variant: 1 },
  { spawn: { y: 24, x: 24 }, variant: 2 },
  { spawn: { y: 24, x: 26 }, variant: 1 },
  { spawn: { y: 25, x: 23 }, variant: 2 },
  { spawn: { y: 25, x: 27 }, variant: 1 },
  { spawn: { y: 26, x: 31 }, variant: 2 },
  { spawn: { y: 27, x: 30 }, variant: 1 },
  { spawn: { y: 27, x: 33 }, variant: 2 },
  { spawn: { y: 28, x: 31 }, variant: 1 },
  { spawn: { y: 30, x: 31 }, variant: 2 },
  { spawn: { y: 30, x: 33 }, variant: 1 },
];

export const WATER = [
  // Original pond
  { spawn: { x: 15, y: 12 } },
  { spawn: { x: 15, y: 13 } },
  { spawn: { x: 16, y: 13 } },
  { spawn: { x: 17, y: 13 } },
  { spawn: { x: 14, y: 14 } },
  { spawn: { x: 15, y: 14 } },
  { spawn: { x: 16, y: 14 } },

  // Lake District (x:18-30, y:38-48)
  { spawn: { x: 22, y: 38 } },
  { spawn: { x: 23, y: 38 } },
  { spawn: { x: 24, y: 38 } },
  { spawn: { x: 21, y: 39 } },
  { spawn: { x: 22, y: 39 } },
  { spawn: { x: 23, y: 39 } },
  { spawn: { x: 24, y: 39 } },
  { spawn: { x: 25, y: 39 } },
  { spawn: { x: 20, y: 40 } },
  { spawn: { x: 21, y: 40 } },
  { spawn: { x: 23, y: 40 } },
  { spawn: { x: 24, y: 40 } },
  { spawn: { x: 25, y: 40 } },
  { spawn: { x: 26, y: 40 } },
  { spawn: { x: 19, y: 41 } },
  { spawn: { x: 20, y: 41 } },
  { spawn: { x: 21, y: 41 } },
  { spawn: { x: 23, y: 41 } },
  { spawn: { x: 24, y: 41 } },
  { spawn: { x: 25, y: 41 } },
  { spawn: { x: 26, y: 41 } },
  { spawn: { x: 27, y: 41 } },
  { spawn: { x: 19, y: 42 } },
  { spawn: { x: 20, y: 42 } },
  { spawn: { x: 21, y: 42 } },
  { spawn: { x: 22, y: 42 } },
  { spawn: { x: 23, y: 42 } },
  { spawn: { x: 24, y: 42 } },
  { spawn: { x: 26, y: 42 } },
  { spawn: { x: 27, y: 42 } },
  { spawn: { x: 28, y: 42 } },
  { spawn: { x: 19, y: 43 } },
  { spawn: { x: 20, y: 43 } },
  { spawn: { x: 21, y: 43 } },
  { spawn: { x: 22, y: 43 } },
  { spawn: { x: 23, y: 43 } },
  { spawn: { x: 24, y: 43 } },
  { spawn: { x: 25, y: 43 } },
  { spawn: { x: 26, y: 43 } },
  { spawn: { x: 27, y: 43 } },
  { spawn: { x: 28, y: 43 } },
  { spawn: { x: 29, y: 43 } },
  { spawn: { x: 20, y: 44 } },
  { spawn: { x: 21, y: 44 } },
  { spawn: { x: 22, y: 44 } },
  { spawn: { x: 23, y: 44 } },
  { spawn: { x: 24, y: 44 } },
  { spawn: { x: 25, y: 44 } },
  { spawn: { x: 26, y: 44 } },
  { spawn: { x: 27, y: 44 } },
  { spawn: { x: 28, y: 44 } },
  { spawn: { x: 29, y: 44 } },
  { spawn: { x: 21, y: 45 } },
  { spawn: { x: 22, y: 45 } },
  { spawn: { x: 23, y: 45 } },
  { spawn: { x: 24, y: 45 } },
  { spawn: { x: 25, y: 45 } },
  { spawn: { x: 26, y: 45 } },
  { spawn: { x: 27, y: 45 } },
  { spawn: { x: 28, y: 45 } },
  { spawn: { x: 22, y: 46 } },
  { spawn: { x: 23, y: 46 } },
  { spawn: { x: 24, y: 46 } },
  { spawn: { x: 25, y: 46 } },
  { spawn: { x: 26, y: 46 } },
  { spawn: { x: 27, y: 46 } },
  { spawn: { x: 23, y: 47 } },
  { spawn: { x: 24, y: 47 } },
  { spawn: { x: 25, y: 47 } },
  { spawn: { x: 26, y: 47 } },
  { spawn: { x: 24, y: 48 } },
  { spawn: { x: 25, y: 48 } },
];

export const ENTRANCES = [
  { spawn: { x: 25, y: 20 }, href: "/townhall", label: "Town Hall", image: "/static/building-townhall.svg" },
  { spawn: { x: 32, y: 29 }, href: "/library", label: "Library", image: "/static/building-library.svg" },
  { spawn: { x: 8, y: 42 }, href: "/cave", label: "Cave", image: "/static/building-cave.svg" },
  { spawn: { x: 6, y: 7 }, href: "/room", label: "House", image: "/static/building-house.svg" },
];
