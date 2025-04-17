import Copyright from "../../components/copyright";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import Typography from "@mui/material/Typography";

export const metadata = {
  title: "Your Videos - OpenTube",
};
function YourVideos() {
  return (
    <>
      <div className="container">
        <div className="content">
          <span>
            <SmartDisplayOutlinedIcon
              sx={{
                color: "text.primary",
                fontSize: 312,
                fontWeight: "medium",
              }}
            />
          </span>

          <Typography variant="h6" gutterBottom>
            Your videos will appear here.
          </Typography>
        </div>
        <span className="copyright">
          <Copyright />
        </span>
      </div>
    </>
  );
}

export default YourVideos;
