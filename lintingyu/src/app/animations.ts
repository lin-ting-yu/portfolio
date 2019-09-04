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
const fadeInOut = [
  query(':enter', [
    style({
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0,
      transform: 'translateY(30px)'
    })
  ], { optional: true }),
  query(':leave', [
    style({ opacity: 1, })
  ], { optional: true }),
  group([
    query(':enter', [
      animate('350ms 400ms ease',
        style({
          opacity: 1,
          transform: 'translateY(0px)'
        })
      )
    ], { optional: true }),
    query(':leave', [
      animate('350ms ease',
        style({ opacity: 0, })
      )
    ], { optional: true })
  ])
]
export const slideInAnimation =
  trigger('routeAnimations', [
    // transition('workA  => workC', an_Right2Left),
    // transition('workC <=> workB', an_Right2Left),
    // transition('workA <=> workB', an_Left2Right),
    // transition('workC  => workA', an_Left2Right),
    // transition('* <=> *', fadeInOut)
  ]);
