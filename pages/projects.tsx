import ProjectsList from '../src/components/ProjectsList';
import Card from "../src/components/Card";
import { Box } from "@mui/material";


const title = "Lorem Ipusum";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, sapien eu malesuada porttitor, purus sapien consequat lectus, sit amet ultricies purus purus eget nisi. Vivamus non blandit nisl. Duis nec cursus leo. Etiam tincidunt purus sed elementum ultricies. Nullam maximus justo eu ipsum volutpat, in volutpat lectus sagittis. Donec mattis nulla id nisl convallis, in pulvinar turpis ultricies. Donec venenatis ultrices euismod.";

const Projects = () => {
    return(
    <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-around",
      flexWrap:"wrap",
      gap: 4,
    }}
  >
<ProjectsList />
</Box>
)
}

export default Projects;