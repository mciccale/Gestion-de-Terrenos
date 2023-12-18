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

const ModificarArrendatario = () => {
  const [dni, setDni] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [sexo, setSexo] = useState('');

  const handleModifyArrendatario = async (event) => {
    event.preventDefault();
    try {
      const newArrendatario = await arrendatarios.modify(dni, {
        nombre,
        edad,
        sexo,
      });
      toast.success(
        <>Arrendatario modificado con éxito.</>
      );
    } catch (exception) {
      toast.error('Arrendatario no Encontrado');
      console.log('Arrendatario no Encontrado');
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
          onSubmit={handleModifyArrendatario}
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
                  Modificar
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
export default ModificarArrendatario;
