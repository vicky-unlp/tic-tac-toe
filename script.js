const Player = (name) => {
    const greeting = () => console.log(`Hi ${name}! Are you ready to play?`);
    return { greeting }
}