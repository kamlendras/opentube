import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { UrlObject } from "url";
export default function Co(props: { l: string | UrlObject; i: string | undefined; t: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; d: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) {
  return (
    <>
      <Card square sx={{ maxWidth: 300, maxHight: 50 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.i}
            alt="NO internet"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.t}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.d}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Start
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
