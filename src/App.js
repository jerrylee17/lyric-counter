import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { grey } from "@material-ui/core/colors";
import { Grid, TextField } from "@material-ui/core";
import { getUnique } from './utils/uniqueWords'

const useStyles = makeStyles((theme) => ({
  paper: {
    // border: '1px solid',
    borderColor: grey[500],
    margin: "7vh 5vw 5vh 5vw",
    padding: "5vh 2vw 2vh 2vw",
    height: "auto",
    minHeight: "70vh",
    width: "auto",
  },
  textCenter: {
    textAlign: "center",
  },
  gridRoot: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  const [lyrics, setLyrics] = useState("");
  const [werds, setWerds] = useState(0)

  useEffect(() => {
    let w = getUnique(lyrics);
    setWerds(w);
  }, [lyrics])
  return (
    <Paper elevation={0} className={classes.paper} variant="outlined">
      <h2 className={classes.textCenter}> Fun.py </h2>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              multiline
              fullWidth
              margin="none"
              rows={25}
              rowsMax={25}
              value={lyrics}
              onChange={(event) => setLyrics(event.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {werds}
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}

export default App;
