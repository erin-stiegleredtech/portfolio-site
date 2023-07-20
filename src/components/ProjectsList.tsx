import Card from "./Card";
import { FC } from "react";

const ProjectsList: FC = () => {
  const title = "Lorem Ipusum";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, sapien eu malesuada porttitor, purus sapien consequat lectus, sit amet ultricies purus purus eget nisi. Vivamus non blandit nisl. Duis nec cursus leo. Etiam tincidunt purus sed elementum ultricies. Nullam maximus justo eu ipsum volutpat, in volutpat lectus sagittis. Donec mattis nulla id nisl convallis, in pulvinar turpis ultricies. Donec venenatis ultrices euismod.";

  return (
    <>
      <Card text={{ title: title, description: description }} />
      <Card text={{ title: title, description: description }} />
      <Card text={{ title: title, description: description }} />
      <Card text={{ title: title, description: description }} />
      <Card text={{ title: title, description: description }} />
    </>
  );
};

export default ProjectsList;
