import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Link,NavLink } from "react-router-dom";

const style = {
  textDecoration: "none",
  color: "white",
};
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} mb={5}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={style} to={"/"}>
                Taskilizer
              </Link>
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              textAlign={"end"}
            >
              <NavLink style={style} to={"add-Task"}>
                Add Task
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
