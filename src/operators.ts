import { name$, sum$, average$ } from './observables';
import { merge, map, filter } from 'rxjs';

// Combine multiple event streams into one
export const combinedNotifications$ = merge(
  name$.pipe(map(name => `Name and random number: ${name}`)),
  sum$.pipe(map(sum => `sum of random number: ${sum}`)),
  average$.pipe(map(average => `average of random number: ${average}`))
);

// Filter notifications based on user preferences
export const filteredNotifications$ = combinedNotifications$.pipe(
  filter(notification => notification.startsWith('New message'))
);