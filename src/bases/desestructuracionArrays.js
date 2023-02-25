const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// tarea
const states = (valor) => {
  return [
    valor,
    () => {
      console.log("hola mundo");
    },
  ];
};

const [nombre, setNombre] = states("Goku");

console.log(nombre, setNombre);
setNombre();
// arr[1]();
