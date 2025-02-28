import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
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
      width: 0,
    }),
    animate(
      '400ms ease-out',
      keyframes([
        style({offset: 0, opacity: 0, width: '0',}),
        style({offset: .8, opacity: .5, width: '*'}),
        style({offset: 1, opacity: 1, width: '*',})
      ])
    ),
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      width: '*',
    }),
    animate(
      '400ms cubic-bezier(1,.01,.35,1.02)',
      style({
        opacity: 0,
        width: 0,
      })
    ),
  ]),
]);

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar',[
      group([
        animate('.2s', style({
          backgroundColor: '#63B77C',
        })),
        animate('.2s', style({
          transform: 'scale(1.1)',
        }))
      ]),
      animate('.2s', style({
        transform: 'scale(1)',
      }))
    ]),
    ]),

    transition('valid => invalid', [
      query('#botao-salvar',[
        group([
          animate('.2s', style({
            backgroundColor: '#6C757D',
          })),
          animate('.2s', style({
            transform: 'scale(1.1)',
          }))
        ]),
        animate('.1s', style({
          transform: 'scale(1)',
        }))
      ])
    ])
]);

export const noContentTextTrigger = trigger('noContentText', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-200px)'
    }),
    animate('.4s ease-out', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translateX(0)'
    }),
    animate('.4s ease-out', style({
      opacity: 0,
      transform: 'translateX(200px)'
    }))
  ])
]);
