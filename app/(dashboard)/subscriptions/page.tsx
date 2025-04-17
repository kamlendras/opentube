import Copyright from "../../components/copyright";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import Typography from "@mui/material/Typography";

export const metadata = {
  title: "Subscriptions - OpenTube",
};
function subscriptions() {
  return (
    <>
      <div className="container">
        <div className="content">
          <span>
            <SubscriptionsOutlinedIcon
              sx={{
                color: "text.primary",
                fontSize: 312,
                fontWeight: "medium",
              }}
            />
          </span>

          <Typography variant="h6" gutterBottom>
            Your subscriptions will appear here.
          </Typography>
        </div>
        <span className="copyright">
          <Copyright />
        </span>
      </div>
    </>
  );
}

export default subscriptions;
