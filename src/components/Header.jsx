import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Stack,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
const style = {
  textDecoration: "none",
  color: "white",
};

const Header = () => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }} mb={5}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <Link style={style} to={"/"}>
                Taskilizer
              </Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="text"
                color="inherit"
                onClick={() => setDrawerState(true)}
                startIcon={<Menu size="large" />}
              />

              <Drawer
                anchor="right"
                open={drawerState}
                onClose={() => setDrawerState(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: "primary.dark",
                    opacity: "0.9",
                    width: {
                      xs: "80%",
                      sm: "30%",
                    },
                  },
                }}
              >
                <Stack sx={
                  {
                    justifyContent: "start",
                    height: "20px",
                  }
                }>
                  <CloseIcon onClick={() => setDrawerState(false)} sx={{
                    color: "white",
                    marginBottom: "20x",
                    cursor: "pointer",
                    fontSize: "2rem"
                  }}/>
                </Stack>
                <ButtonGroup
                  variant="text"
                  component="div"
                  disableRipple
                  aria-label="Navigation"
                  fullWidth
                  orientation="vertical"
                  
                >
                  <Button
                    aria-label="add a task"
                    sx={{
                     
                      fontSize: "1.5rem"
                      
                    }}
                    startIcon={<AddIcon 
                    sx={{
                      color: "white"
                    }}
                    />}
                    >
               
                  
                    <Link underline="none" to={"add-Task"} style={style}>
                      Add Task
                    </Link>
                  </Button>
                </ButtonGroup>
              </Drawer>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
