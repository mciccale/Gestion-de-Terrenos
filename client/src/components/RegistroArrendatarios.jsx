import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Card,
  Button,
  Typography,
  Input,
  Select,
  Option,
} from '@material-tailwind/react';

import FormInput from './FormInput';
import arrendatarios from '../services/arrendatarios';

const RegistroArrendatarios = () => {
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [sexo, setSexo] = useState('');

  const handleNewArrendatario = async (event) => {
    event.preventDefault();
    try {
      const newArrendatario = await arrendatarios.create({
        dni,
        nombre,
        edad,
        sexo,
      });
      toast.success(
        <>Arrendatario registrado con éxito. Su DNI es {newArrendatario.dni}</>
      );
    } catch (exception) {
      toast.error('Formato del Arrendatario Incorrecto');
      console.log('Formato del Arrendatario Incorrecto');
    }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setDni('');
    setNombre('');
    setEdad(0);
    setSexo('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card color="transparent" shadow={false}>
        <form
          className="w-full max-w-screen-lg sm:w-96"
          onSubmit={handleNewArrendatario}
        >
          <div className="flex flex-wrap -mx-3 -mb-3">
            <div className="mb-1 flex flex-col gap-6">
              <FormInput
                entry={dni}
                setEntry={setDni}
                entryName={'DNI'}
                type={'text'}
              />
              <FormInput
                entry={nombre}
                setEntry={setNombre}
                entryName={'Nombre'}
                type={'text'}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Edad
              </Typography>
              <Input
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
                type="number"
                step="1"
                value={edad}
                name={'edad'}
                onChange={({ target }) => setEdad(target.value)}
              />
              <Typography variant="h6" color="blue-gray">
                Sexo
              </Typography>
              <Select label="Sexo" onChange={(element) => setSexo(element)}>
                <Option value="H">Hombre</Option>
                <Option value="M">Mujer</Option>
              </Select>
              <div className="flex items-center w-max gap-4">
                <Button type="submit" className="mt-6">
                  Create
                </Button>
                <Button className="mt-6" onClick={handleReset}>
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default RegistroArrendatarios;
