import { Box, Button, Container } from "@mui/material";
import {
  Body,
  ButtonPadding,
  ContainerPadding,
  Dark,
  H1,
  H2,
  H3,
  Primary,
  Secondary,
} from "../../utils";
import { Logins } from "../../assets/index";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
interface AdInterface {
  userName: string;
  password: string;
  Logins?: HTMLImageElement;
}

export const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          bgcolor: Body,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container sx={{ padding: ContainerPadding }}>
          <Box
            sx={{
              display: "flex",

              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              width: "100%",
              alignItems: "center",
              columnGap: "20px",
              rowGap: "20px ",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                  xs: "100%",
                },
              }}
            >
              <img
                src={Logins}
                alt="image"
                style={{ width: "90%", height: "80%" }}
              />
              <H3 variant="h3">
                {t(
                  "Syed Brothers designers & builders redefine the architecture designing, construction & real estate sector as the best construction company in Pakistan."
                )}
              </H3>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                alignItems: "center",
                border: "none",
                borderRadius: " 8px",
                boxShadow:
                  " 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
                boxSizing: "border-box",

                width: {
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                  xs: "100%",
                },
              }}
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 2,
                    width: {
                      xl: "30ch",
                      lg: "30ch",
                      md: "30ch",
                      sm: "30ch",
                      xs: "20ch",
                    },
                  },
                  width: {
                    xl: "100%",
                    lg: "100%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
                  },
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                noValidate
                autoComplete="off"
              >
                <H2
                  variant="h2"
                  mt={2}
                  sx={{ textAlign: "center", color: Dark }}
                >
                  {t("Please Login")}
                </H2>
                <TextField
                  id="outlined-basic"
                  label={t("User Name")}
                  variant="outlined"
                />
                <TextField
                  id="outlined-password-input"
                  label={t("Password")}
                  type="password"
                  autoComplete="current-password"
                />
                <a href="/" style={{ textDecoration: "none", color: Dark }}>
                  {t("Forgot Password? Click Here")}
                </a>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: Secondary,
                      padding: ButtonPadding,
                      width: "100%",
                      "&:hover": {
                        bgcolor: Dark,
                      },
                    }}
                  >
                    {t("Login")}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <button onClick={() => i18n.changeLanguage("ur")}>{t("Urdu")}</button>
          <button onClick={() => i18n.changeLanguage("en")}>English</button>
        </Container>
      </Box>
    </>
  );
};
