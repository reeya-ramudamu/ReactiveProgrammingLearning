

import { Observable } from 'rxjs';
let sum = 0;
let randomArr = [];
      for (let i = 0; i < 20; i++) {
        randomArr.push(Math.floor(Math.random() * 100) + 1);
      }

export const name$ = new Observable<string>((subscriber) => {
  let index = 0;

  // Set interval to emit values every 3 seconds
  const intervalId = setInterval(() => {
    if (index < randomArr.length) {
      subscriber.next(`Reeya Ramudamu: ${randomArr[index]}`);
      index++;
    } else {
      // If we've reached the end of the array, complete the observable
      subscriber.complete();
      clearInterval(intervalId);
    }
  }, 10000);
});


/// Observable for sum of generated random numbers
export const sum$ = new Observable<number>((subscriber) => {
  let sum = 0;
  let index = 0;

  
  const intervalId = setInterval(() => {
    if (index < randomArr.length) {
      sum += randomArr[index];
      subscriber.next(sum);
      index++;
    } else {
      subscriber.complete();
      clearInterval(intervalId);
    }
  }, 10000);
});

// Observable for average of last three random numbers
export const average$ = new Observable<number>((subscriber) => {
  let index = 0;
  let randomNumbers = [];

  const intervalId = setInterval(() => {
    if (index < randomArr.length) {
      // Add the current random number to the list
      randomNumbers.push(randomArr[index]);

      // If there are more than 3 numbers, remove the oldest one
      if (randomNumbers.length > 3) {
        randomNumbers.shift();
      }

      // Calculate the average of the last three numbers
      const sumLastThree = randomNumbers.reduce((acc, val) => acc + val, 0);
      const average = sumLastThree / randomNumbers.length;
      
      subscriber.next(average);
      index++;
    } else {
      subscriber.complete();
      clearInterval(intervalId);
    }
  }, 10000);
});















// import { Observable } from 'rxjs';

// // Observable for new messages
// export const newMessage$ = new Observable<string>((subscriber) => {
//   // Simulate receiving new messages
//   setInterval(() => {
//     subscriber.next('New message received');
//   }, 3000);
// });

// // Observable for user mentions
// export const userMentions$ = new Observable<string>((subscriber) => {
//   // Simulate user mentions
//   setInterval(() => {
//     subscriber.next('You were mentioned in a message');
//   }, 5000);
// });

// // Observable for system alerts
// export const systemAlerts$ = new Observable<string>((subscriber) => {
//   // Simulate system alerts
//   setInterval(() => {
//     subscriber.next('System alert: Server down');
//   }, 10000);
// });