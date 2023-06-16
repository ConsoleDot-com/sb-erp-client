import { Box, Container } from "@mui/material";
import { Body, ContainerPadding } from "../../utils";
import { Logins } from "../../assets/index";
import TextField from '@mui/material/TextField';

 interface AdInterface {
    email: string;
    mobile: number;
    Logins?: HTMLImageElement
}

export const Login = () => {
  return (
    <>
      <Box sx={{ bgcolor: Body }}>
        <Container sx={{ padding: ContainerPadding }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column-reverse",
                xs: "column-reverse",
              },
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ xl: "50%", lg: "50%", md: "50%", sm: "100%", xs: "100%" }}
            >
                <img src={Logins} alt="image" />
            </Box>
            <Box
              sx={{ xl: "50%", lg: "50%", md: "50%", sm: "100%", xs: "100%" }}
            >
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
 
    </Box> 
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
