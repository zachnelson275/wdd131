let wordList = document.querySelector("#vocab_container")

const words = [
    {
    word: "DPS",
    definition: "Damage Per Second",
    usage: "Can be used to reference the average amount of damage your gaurdian puts out per second, but more often is used to describe the total damage your gaurdian puts out. Can also be used to describe a phase of the raid encounter, such as 'DPS Phase' where the main objective is to deal as much damage as possible to the boss."
    },
    {
        word: "Strat",
        definition: "Shorthand for strategy",
        usage: "Used to refer to a method of dealing damage. For example, 'Let's do rocket strat' means lets use rockets as our primary damage strategy. Can also be used to refer to the strategy for completeing an encounter, such as 'The strat for Atheon is to split up into two teams of three, one team reads and the other does oracles.'"
    },
    {
        word: "Meta",
        definition: "Optimal or most effective",
        usage: "Used to refer to the best possible weapons or strategies for a given situation. For example, 'The meta for Atheon DPS is to use Gjallarhorn and Well of Radiance.' Can also be used to refer to the overall best way to play the game, such as 'Ever since Prismatic was introduced, everything else has struggled to find a place in the meta.'"
    },
    {
        word: "Encounter",
        definition: "One of the boss fights or major challenges within a raid.",
        usage: "There are two main types of encounters: boss fights and mechanics challenges. One example of a tough boss encounter is the Herald of Finality from the Salvation's Edge raid. One example of of a mechanics encounter is Verity encounter from the same raid."
    },
    {
        word: "Cheese",
        definition: "Completing an encounter in an unintended ways; using exploits or glitches to bypass mechanics",
        usage: "Anytime you use an uninted method or exploit to complete an encounter, you are cheesing it. One of the most famous raid cheeses comes from the Last Wish raid, where instead of doing one of the best encounters in the entire game, you use swords on Riven's toes to DPS her down before the wipe mechanic occurs, bypassing the encounter entirely."
    },
    {
        word: "Wipe",
        definition: "All members of the fireteam die, which restarts the encounter from the last checkpoint",
        usage: "A wipe can occur in a few ways. One of the most common ways is when you fail the mechanics of an encounter, which results in the entire fireteam dying. Another way a wipe can happen is if all the gaurdians are dead at the same time. A third way is when one guardian dies, a timer starts in the bottom right of your screen. If the timer reaches zero before a gaurdian revives them, the entire fireteam wipes."
    },
    {
        word: "Buff",
        definition: "Empowering or strengthening a guardian, weapon, or ability",
        usage: "In every damage encounter, it is important to have at least one buff active to maximize your damage output. Some common buffs include Well of Radiance, Gjallarhorn, or weapon surges. The more buffs you can stack together the better!"
    },
    {
        word: "Debuff",
        definition: "Depowering or weakening an enemy",
        usage: "In every damage encounter, it is helpful to have at least one debuff active on the boss to maximize your damage output. Some common debuffs include Tractor Cannon, Tether, or the Strand keyword 'Sever'. The more debuffs you can stack together on the boss the better!"
    }
];

words.forEach(word => {
    let html = `<div class="word">
    <h3>${word.word}</h3>
    <p><strong>Definition:</strong> ${word.definition}</p>
    <p><strong>Usage:</strong> ${word.usage}</p>
    </div>`;

    wordList.innerHTML += html;
})