// RXJS
import {Observable, Observer, Subscription} from 'rxjs';
import {Subscribable} from "rxjs/Observable";
import {Subject} from 'rxjs';

// Observable

// shouts events
// 2 states: cold/hot

// console.log('1');
// const observableExample : Observable<string> = Observable.create((observer : Observer<string>) => {
//     console.log('3');
//     setTimeout(() => {
//         console.log('6');
//         observer.next('hello from observable')
//     }, 100);
//
//     setTimeout(() => {
//         console.log('9');
//         observer.next('message2')
//     }, 200);
//
//     setTimeout(() => {
//         console.log('10');
//         observer.complete();
//         console.log('not reached');
//     }, 50);
// });

// Observer

// implements next, error, complete
// listener for events

// console.log('2');
// observableExample.subscribe(function next(message : string){
//     console.log('7');
//     console.log(message)
// });
//
// console.log('4');
// observableExample.subscribe(function next(message : string){
//     console.log('8');
//     console.log(message);
// });
//
// console.log('5');

// observable runs for each subscribe in its context


// Subscription

// const subscriptionExample : Subscription = observableExample.subscribe(function next(message){
//     console.log(message)
// });
//
// subscriptionExample.unsubscribe();

// Subject

// const subjectExample : Subject<string> = new Subject();
//
// subjectExample.subscribe(function next(message){
//     console.log(message);
// });
//
// subjectExample.subscribe(function next(message){
//     console.log(`from 2nd subscriber: ${message}` );
// });
//
// subjectExample.next('hello from subject');


// Operator

// map

const stringObservable : Observable<string> = Observable.create((observer) => {
    observer.next('hello from string observable');
});

const numberObservable = stringObservable.map((messageFromObservable : string) => {
    return messageFromObservable.length;
});

numberObservable.subscribe(function next(num : Number){
    console.log(`the number of letters in message is: ${num}`);
});










