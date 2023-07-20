import { FC } from "react";
import { TextField, Button} from "@mui/material";

const Form: FC = () => {
  return (
    <>
      <TextField label="Full Name" fullWidth />
      <TextField label="Email" fullWidth />
      <TextField label="Message" fullWidth multiline rows={5} />
      <Button type="submit">Submit</Button>
    </>
  );
};

export default Form;
