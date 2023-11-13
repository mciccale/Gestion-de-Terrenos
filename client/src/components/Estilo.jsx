import { Typography } from "@material-tailwind/react";

const Estilo = ({ texto }) => {
  return (
    <Typography variant="h6" className="mr-4 cursor-pointer py-1">
      {texto}
    </Typography>
  );
};

export default Estilo;
