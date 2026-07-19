
// Takhte Nard Game
console.log("🎲 Takhte Nard Started");

function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    alert("🎲 تاس اول: " + dice1 + "\n🎲 تاس دوم: " + dice2);
}
