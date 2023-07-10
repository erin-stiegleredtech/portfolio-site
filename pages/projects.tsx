import ProjectsList from '../src/components/ProjectsList';
import { Box } from "@mui/material";



const Projects = () => {
    <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-around",
      flexWrap:"wrap",
      gap: 4,
    }}
  >
<ProjectsList></ProjectsList>
</Box>
}

export default Projects;