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
//Prompt 1: double the hitpoints of everyone in the party
const doubleHP = () =>{
    party.forEach((el =>{
        el.hitpoints = el.hitpoints*2
    }))
};
doubleHP();
//Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
const damageHP = (name, dmg) => {
    party.forEach((el =>{
        if(el.name == name){
            el.hitpoints = el.hitpoints - dmg
        }
    }))
};
damageHP("Timothy", 5);
//Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp
const polyPet = (name, newPet) => {
    party.forEach((el =>{
        if(el.name == name){
            el.companion.type = newPet
        }
    }))
};
polyPet("Sarah", "jellyfish");
//Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
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
//Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
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
//Prompt 6: Joline got upset and left the party. Take her out of the array. (leaving member is parameter)
const leaveParty = (name) => {
   party = party.filter(member=> member.name!== name) 
    };
leaveParty("Joline")
//Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)
const recruitNew = (obj) => {
    party.push(obj)
}
let newMemb = {
    name: 'Tim',
    hitpoints: 15,
    belongings: [ 'staff', 'book', 'tea' ],
    adventureTime: 'new',
    companion: { name: 'Jeremy', type: 'Rat' }
  }
recruitNew(newMemb)

// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)

const findGold = (gold) => {
    let goldCut =( gold / party.length);
    goldCut = Math.floor(goldCut);
    party.forEach((el =>{
        el.goldAmount = goldCut}
    
    
    ));

}

findGold(200)
// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 

party[1].goldAmount = party[1].goldAmount - 10
party[1].companion.type = "Bear"


// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 

party[0].belongings[1] = "Rusty Sword"
console.log(party)
// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.

const setLeader = (name) => {
    party.forEach((el =>{
       if(el.name == name){
        el.leader = true
       } else {
        el.leader = false
       }
    }));
    }

setLeader("Sarah")
console.log(party)