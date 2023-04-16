export const getRandomDimension = () => {
    //? Esta funcion debe retornar un numero del 1 al 126 que representa una dimension.
    return Math.floor(Math.random() * 126) + 1
}