import { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
const ListadoTerrenos = () => {
    const url = "http://localhost:3001";
    const [terrenos, setTerrenos] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await fetch(`${url}/terrains`);
            const data = await res.json();
            console.log(data);
            setTerrenos(data);
            console.log("Data loaded");
        })();
    }, []);
    return (
        <>
            <div className="gap-6">
                <main className="main-container" >
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
                                                className="font-normal leading-none opacity-70">
                                                ID
                                            </Typography></th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"><Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70">
                                            Ubicación
                                        </Typography></th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"><Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70">
                                            Hectáreas
                                        </Typography></th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"><Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70">
                                            Límites
                                        </Typography></th>
                                    </tr>
                                </thead>
                                {terrenos ? (
                                    <tbody>
                                        {terrenos.map((terrain) => (
                                            <tr key={terrain.id}>
                                                <td><Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {terrain.id}
                                                </Typography></td>
                                                <td><Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {terrain.ubicacion}
                                                </Typography></td>
                                                <td><Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {terrain.hectareas}
                                                </Typography></td>
                                                <td><Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {JSON.stringify(terrain.limites)}
                                                </Typography></td>
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
            </div>c
        </>
    )
}
export default ListadoTerrenos