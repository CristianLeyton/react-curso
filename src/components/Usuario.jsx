export const Usuario = (props) => {

    const {nombre, edad, nacionalidad} = props;

    return (
      <div>
        <h1>{nombre}</h1>
        <p>Edad: {edad}</p>
        <p>nacionalidad: {nacionalidad}</p>
      </div>
    );
  };

//Tambien se puede: -> 

/*   export const Usuario = ({nombre, edad, nacionalidad}) => {

    return (
      <div>
        <h1>{nombre}</h1>
        <p>Edad: {edad}</p>
        <p>nacionalidad: {nacionalidad}</p>
      </div>
    );
  }; */