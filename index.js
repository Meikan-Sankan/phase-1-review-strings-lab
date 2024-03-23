const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

console.log('currentUser is defined:', true);
console.log('welcomeMessage contains "Welcome to Flatbook, ":', welcomeMessage.includes(`Welcome to Flatbook, `));
console.log('welcomeMessage contains the value of the \'currentUser\' variable:', welcomeMessage.includes(currentUser));
console.log("welcomeMessage ends with an exclamation point!:", welcomeMessage.endsWith('!'));
console.log('excitedWelcomeMessage contains "WELCOME TO FLATBOOK, ":', excitedWelcomeMessage.includes(`WELCOME TO FLATBOOK, `));
console.log('excitedWelcomeMessage contains the value of the \'currentUser\' variable:', excitedWelcomeMessage.includes(currentUser));
console.log("excitedWelcomeMessage ends with an exclamation point:", excitedWelcomeMessage.endsWith('!'))
console.log('shortGreeting contains "Welcome, ":', shortGreeting.includes(`Welcome, `));
console.log('shortGreeting contains the first initial of the name stored in the \'currentUser\' variable:', shortGreeting.includes(currentUser.charAt(0)));
console.log("shortGreeting ends with an exclamation point:", shortGreeting.endsWith('!'))
;