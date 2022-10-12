import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../themes/commonStyles";
const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Become a Host</Link>
      <Stack direction="row">
        <Button>
          <BsGlobe size={24}></BsGlobe>
        </Button>
        <Button sx={{ borderRadius: 10, border: "1px solid #ddd" }}>
          <Stack direction="row">
            <AiOutlineMenu size={24}></AiOutlineMenu>
            <FaRegUserCircle
              size={24}
              style={{ marginLeft: 12 }}
            ></FaRegUserCircle>
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
