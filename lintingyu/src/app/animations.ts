import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';



let an_Left2Right = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('500ms ease-out', style({ left: '100%'}))
    ]),
    query(':enter', [
      animate('500ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
]

let an_Right2Left = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '100%'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('500ms ease-out', style({ left: '-100%'}))
    ]),
    query(':enter', [
      animate('500ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild()),
]

let fadeInOut = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      opacity: 1
    })
  ]),
  query(':enter', [
    style({ opacity: 0})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('250ms ease-out', style({ opacity: 0}))
    ]),
    query(':enter', [
      animate('250ms 450ms ease-out', style({ opacity: 1}))
    ])
  ]),
  query(':enter', animateChild()),
]
let fadeInOut2 = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      opacity: 1
    })
  ]),
  query(':enter', [
    style({ opacity: 0})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('400ms ease-out', style({ opacity: 0}))
    ]),
    query(':enter', [
      animate('400ms ease-out', style({ opacity: 1}))
    ])
  ]),
  query(':enter', animateChild()),
]
export const slideInAnimation =
  trigger('routeAnimations', [
    // transition('workA  => workC', an_Right2Left),
    // transition('workC <=> workB', an_Right2Left),
    // transition('workA <=> workB', an_Left2Right),
    transition('works => work', fadeInOut2),
    transition('* <=> *', fadeInOut)
  ]);
