import { dev } from "$app/env"


export function log(message: string) {
  if (dev) console.log(
    `%c${ message }`,
    `padding: 2px; 
    color: #000;
    background: #0cf;
    size: 12px;`,
  )
}

export function error(message: string) {
  if (dev) console.log(
    `%c${ message }`,
    `padding: 2px; 
    color: #f00;
    size: 12px;`,
  )
}

