import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger =
  // Definindo a animação chamada 'highlightedState'
  trigger('highlightedState', [
    // Definindo o estado inicial da animação
    state(
      'default',
      style({
        border: '2px solid #B2B6FF',
      })
    ),

    // Definindo o estado highlighted, que será o estilo quando o elemento estiver em destaque
    state(
      'highlighted',
      style({
        filter: 'brightness(.92)',
      })
    ),
    // aplicando transição entre os estados
    transition('default => highlighted', [
      animate(
        '.2s ease-out',
        style({
          transform: 'scale(1.02)',
        })
      ),
      animate('.2s'),
    ]),
  ]);

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const buttonMarkerTrigger = trigger('buttonMarker', [
  transition('* => marked', [
    animate(
      300,
      style({
        transform: 'scale(.8)',
      })
    ),
    animate('.3s'),
  ]),
  transition('marked => *', [
    animate(
      300,
      style({
        transform: 'scale(.8)',
      })
    ),
    animate('.3s'),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      with: 0,
    }),
    animate(
      '400ms ease-out',
      keyframes([
        style({opacity: 0, width: '0',}),
        style({opacity: .8, width: '*'}),
        style({opacity: 1, width: '*',})
      ])
    ),
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      width: '*',
    }),
    animate(
      '400ms ease-out',
      style({
        opacity: 0,
        width: 0,
      })
    ),
  ]),
]);
