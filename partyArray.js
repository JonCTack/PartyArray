let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
];

const doubleHP = () =>{
    party.forEach((el =>{
        el.hitpoints = el.hitpoints*2
    }))
};
doubleHP();

const damageHP = (name, dmg) => {
    party.forEach((el =>{
        if(el.name == name){
            el.hitpoints = el.hitpoints - dmg
        }
    }))
};
damageHP("Timothy", 5);
const polyPet = (name, newPet) => {
    party.forEach((el =>{
        if(el.name == name){
            el.companion.type = newPet
        }
    }))
};
polyPet("Sarah", "jellyfish");
const drinkPotion = (name) => {
    party.forEach((el =>{
        if(el.name == name && el.belongings.includes("potion")){
            el.hitpoints = el.hitpoints +20
            el.belongings = el.belongings.filter(e => e !== "potion")
        } else if(el.name == name){
            console.log("this person doesn't have a potion!")
        }
            
        }
    ))
};
drinkPotion("Timothy")

const stealObj = (nameThief, nameVic, item) => {
    let stealSuc = undefined
    party.forEach((el =>{
        if(el.name == nameVic && el.belongings.includes(item)){
            el.belongings = el.belongings.filter(e => e !== item)
            let stealSuc = true}
         else if(el.name == nameVic){
            console.log(`this person doesn't have ${item}!`)
        }
    }))
    if (stealSuc = true){
        party.forEach((el =>{
            if(el.name == nameThief){
                el.belongings.unshift(item)
                let stealSuc = undefined}
    
        }))
    }
};

stealObj("Timothy","Joline","bread")

const leaveParty = (name) => {
   party = party.filter(member=> member.name!== name) 
    };
leaveParty("Joline")
