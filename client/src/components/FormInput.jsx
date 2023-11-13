import { Typography, Input } from "@material-tailwind/react";

const FormInput = ({ entry, setEntry, entryName, type }) => {
  return (
    <>
      <Typography variant="h6" color="blue-gray">
        {entryName}
      </Typography>
      <Input
        size="lg"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        type={type}
        value={entry}
        name={entryName}
        onChange={({ target }) => setEntry(target.value)}
      />
    </>
  );
};

export default FormInput;
