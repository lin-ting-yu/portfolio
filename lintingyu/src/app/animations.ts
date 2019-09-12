import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';


let fadeInOut = [
  style({
    position: 'relative'
  }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      opacity: 1
    })
  ], {optional: true}),
  query(':enter', [
    style({
      opacity: 0
    })
  ], {optional: true}),
  query(':leave', animateChild(), {optional: true}),

  group([
    query(':leave', [
      animate('250ms ease-out', style({
        opacity: 0
      }))
    ], {optional: true}),
    query(':enter', [
      animate('250ms 450ms ease-out', style({
        opacity: 1
      }))
    ], {optional: true})
  ]),
  query(':enter', animateChild(), {optional: true}),
]
let fadeInOut2 = [
  style({
    position: 'relative'
  }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      opacity: 1
    })
  ], {optional: true}),
  query(':enter', [
    style({
      opacity: 0
    })
  ], {optional: true}),
  query(':leave', animateChild(), { optional: true }),

  group([
    query(':leave', [
      animate('400ms ease-out', style({
        opacity: 0
      }))
    ], {optional: true}),
    query(':enter', [
      animate('400ms ease-out', style({
        opacity: 1
      }))
    ], {optional: true})
  ]),
  query(':enter', animateChild(), {optional: true}),
]
export const slideInAnimation =
  trigger('routeAnimations', [
    // transition('workA  => workC', an_Right2Left),
    // transition('workC <=> workB', an_Right2Left),
    // transition('workA <=> workB', an_Left2Right),
    transition('works => work', fadeInOut2),
    transition('* <=> *', fadeInOut)
  ]);