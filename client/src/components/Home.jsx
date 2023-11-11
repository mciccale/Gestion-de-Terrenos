import { Typography } from "@material-tailwind/react";
const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="mb-1 flex flex-col gap-6 w-max">
        <Typography variant="h1" color="blue-gray">
          Bienvenido a Gestión de Terrenos
        </Typography>
        <img src="https://i.pinimg.com/originals/e1/81/24/e18124b13aaf5529b2cd85581a4c4faf.jpg"></img>
      </div>
    </div>
  );
};
export default Home;
