import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    width: "100%",
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "transparent",
  },
  heading: {
    color: "white",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "10px",
    height: "auto",
  },
  profile: {
    marginTop: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
  },
  list: {
    height: "100vh",
    backgroundColor: "rgba(253,163,75, 0.5)",
    width: 400,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
