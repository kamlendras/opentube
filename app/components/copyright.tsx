import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {new Date().getFullYear()}
      {"      "}

      <Link underline="none" color="inherit" href="/">
        | MIT Licenced | OpenTube |
      </Link>
    </Typography>
  );
}
export default Copyright;
