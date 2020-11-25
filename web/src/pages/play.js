import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [connected, setConnected] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const connect = () => {
    setConnected(true);
  }

  return (
    <Container maxWidth="sm">
      {connected ? (
        <Grid container spacing={2}>
          <Grid item><h1>Connected!</h1></Grid>
        </Grid>
      ) : (
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <div className={classes.title}>
              <Typography variant="h4">Scattergories</Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              value={name}
              onChange={handleName}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={connect}>
              Join
            </Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
