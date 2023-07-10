import { FC } from 'react';
import {TextField, Button} from "@mui/material";


const Form: FC = () => {
    return(

           
           <form>
      <TextField label="Full Name" fullWidth/>
      <TextField label="Email" fullWidth/>
      <TextField label="Message" fullWidth multiline rows={5}/>
      <Button type="submit">Submit</Button>
    </form>
          
      

    );
} 

export default Form;