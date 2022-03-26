/**
 * Function example of a slow process
 * @param {number} iteraciones
 * @returns
 */
export const procesoPesado = (iteraciones = 0) => {
  for (let i = 0; i < iteraciones; i++) {
    console.log('Ahi vamos');
  }

  return `${iteraciones} iteraciones realizadas.`;
};
