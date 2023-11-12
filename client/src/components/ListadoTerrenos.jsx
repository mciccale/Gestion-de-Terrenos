import { useState, useEffect } from "react";
import terrenosService from "../services/terrenos";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ListadoTerrenos = () => {
  const [terrenos, setTerrenos] = useState([]);

  useEffect(() => {
    terrenosService.getAll().then((terrenos) => {
      setTerrenos(terrenos);
    });
  }, []);

  return (
    <div className="gap-6">
      <main className="main-container">
        <article>
          <Card className="h-full w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2 mx-auto ">
            <h2 className="list-header gap-6">Listado de terrenos</h2>
            <table className=" table-auto text-center h-full w-full mx-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      ID
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Ubicación
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Hectáreas
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Límites
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Detalles
                    </Typography>
                  </th>
                </tr>
              </thead>
              {terrenos ? (
                <tbody>
                  {terrenos.map((terrain) => (
                    <tr key={terrain.id}>
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {terrain.id}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {terrain.ubicacion}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {terrain.hectareas}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {terrain.limites.map(({ x, y }, i) => (
                            <span key={i}>
                              ({x}, {y})
                            </span>
                          ))}
                        </Typography>
                      </td>
                      <td>
                        <Link to={`/terrenos/${terrain.id}`}>
                          <Button variant="text">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              Más Información
                            </Typography>
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <p>Loading...</p>
              )}
            </table>
          </Card>
        </article>
      </main>
    </div>
  );
};
export default ListadoTerrenos;
