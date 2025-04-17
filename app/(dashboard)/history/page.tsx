import Copyright from "../../components/copyright";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Typography from "@mui/material/Typography";

export const metadata = {
  title: "History - OpenTube",
};
function history() {
  return (
    <>
      <div className="container">
        <div className="content">
          <span>
            <HistoryOutlinedIcon
              sx={{
                color: "text.primary",
                fontSize: 312,
                fontWeight: "medium",
              }}
            />
          </span>

          <Typography variant="h6" gutterBottom>
            Your history will appear here.
          </Typography>
        </div>
        <span className="copyright">
          <Copyright />
        </span>
      </div>
    </>
  );
}

export default history;
