import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Tarea Semana 2</Text>

      <FormularioSimple />
      
      <ContadorSimple />

      <RelojSimple />

      <PantallaCarga />
    </View>
  );
}


function FormularioSimple() {
  
  //Los estados para el nombre y edad
  const [nombre, setNombre] = useState<string>('');
  const [edad, setEdad] = useState<string>('');
  const [error, setError] = useState<string>('');

  //Verificamos la edad por si el usuario no ingresa un numero
  const verificarEdad = (): void => {
    if (edad === '') {
      setError('Porfavor, escribe tu edad');
    } else if (isNaN(Number(edad))) {
      setError('La edad debe ser un numero...');
    } else {
      setError('');
    }
  };

  return (
    <View style={styles.ejercicio}>
      <Text style={styles.subtitulo}>Formulario</Text>
      
      {/*Le pedimos su nombre */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      {/*Le pedimos su edad */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="number-pad"
        onBlur={verificarEdad}
      />

      {error ? <Text style={styles.textoError}>{error}</Text> : null}

      {/*Mostramos el saludo si no hay error */}
      {nombre && edad && !error ? (
        <Text style={styles.saludo}>Hola {nombre}, tu tienes {edad} años.</Text>
      ) : null}
    </View>
  );
}


//El contador
function ContadorSimple() {
  //Declaramos el estado del contador y el mensaje especial
  const [contador, setContador] = useState<number>(0);
  const [mensaje, setMensaje] = useState<string>('');

  useEffect(() => {
    console.log('Contador:', contador);

    if (contador > 0 && contador % 5 === 0) {
      //El mensaje especial
      setMensaje('Este un multiplo de 5!');

      setTimeout(() => setMensaje(''), 2000);
    }
  }, [contador]);
  
  return (
    <View style={styles.ejercicio}>
      <Text style={styles.subtitulo}>Contador</Text>
      
      <Text style={styles.contadorNumero}>{contador}</Text>
      
      <Button
        title="Sumar +1"
        onPress={() => setContador(contador + 1)}
        color="#5b83a5ff"
      />
      
      {mensaje ? <Text style={styles.mensajeEspecial}>{mensaje}</Text> : null}
    </View>
  );
}

//Reloj
function RelojSimple() {

  const [hora, setHora] = useState<string>('');
  const [relojEncendido, setRelojEncendido] = useState<boolean>(true);

  
  useEffect(() => {
    let intervalo: NodeJS.Timeout;
    
    if (relojEncendido) {
      
      //Agarra los datos de la hora actual
      const actualizarHora = (): void => {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, '0');
        const minutos = ahora.getMinutes().toString().padStart(2, '0');
        const segundos = ahora.getSeconds().toString().padStart(2, '0');
        setHora(`${horas}:${minutos}:${segundos}`);
      };
      
      
      actualizarHora();

      intervalo = setInterval(actualizarHora, 1000);
    }

    return () => {
      if (intervalo) {
        clearInterval(intervalo);
      }
    };
  }, [relojEncendido]);

  //Retornamos la vista del reloj
  return (
    <View style={styles.ejercicio}>
      <Text style={styles.subtitulo}>Reloj</Text>
      
      <Text style={styles.reloj}>
        {hora}
      </Text>
    </View>
  );
}

//Pantalla de carga
function PantallaCarga() {
  //Declaramos el booleano de cargando
  const [cargando, setCargando] = useState<boolean>(true);

  //Usamos el useEffect para simular la carga
  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.ejercicio}>
      <Text style={styles.subtitulo}>Pantalla de Carga</Text>
      
      {cargando ? (
        <View>
          <Text style={styles.cargandoTexto}>Cargando...</Text>
          <Text>Espera un poco...</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.bienvenidaTexto}>Bienvenido!</Text>
          <Button
            title="Volver a cargar"
            onPress={() => setCargando(true)}
            color="#d5a255ff"
          />
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#161616ff',
  },
  //Titulo de la aplicacion
  tituloPrincipal: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffffffff',
  },
  //La caja que contiene cada ejercicio
  ejercicio: {
    backgroundColor: '#e0e0e0ff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  //Estilo para los titulos de cada ejercicio
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#141414ff',
  },
  //Estilo para los inputs
  input: {
    borderWidth: 1,
    borderColor: '#939393ff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  //Muestra un error en rojo si el usuario no ingresa bien los datos
  textoError: {
    color: 'red',
    marginBottom: 10,
  },
  //Decoracion para el saludo del primer ejercicio
  saludo: {
    color: '#62478bff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  //Decoracion para el segundo ejercicio
  contadorNumero: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  mensajeEspecial: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  //Interfaz del tercer ejercicio
  reloj: {
    fontSize: 28,
    color: '#f11111ff',
    fontWeight: 'bold',
    fontFamily: '',
    textAlign: 'center',
    marginVertical: 10,
  },
  //Cargando, parte del cuarto ejercicio
  cargandoTexto: {
    color: '#6497f6ff',
    fontSize: 18,
    marginBottom: 10,
  },
  //Damos la bienvenida en el cuarto ejercicio
  bienvenidaTexto: {
    color: '#79be7bff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});