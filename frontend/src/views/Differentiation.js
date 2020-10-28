import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getDifferentiation } from "../functions/axios";

const useStyles = makeStyles((theme) => ({

    colorButton: {
        backgroundColor: ' #3EADCF ',
        backgroundImage:  'linear-gradient(315deg, #f9c5d1 0%, #ABE9CD 74%)',
        fontSize: 20,
        fontWeight: "bold",
        
    },
    colorButton2: {
        backgroundColor: ' #3EADCF ',
        backgroundImage:  'linear-gradient(315deg, #f9c5d1 0%, #ABE9CD 74%)',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: theme.spacing(5),
      },
    state: {
        backgroundColor: ' #7f53ac ',
        backgroundImage:  'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
    },
    background: {
        backgroundColor: ' #7f53ac ',
        backgroundImage:  'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
    },
  
    card: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        marginTop: theme.spacing(15),
        // backgroundColor: '#f0ecfc',
        backgroundImage: 'linear-gradient(to right, #ffffff 0%, #e7dfe2 100%)',
        
    },

    grid:{
        marginTop: theme.spacing(0),
        fontSize: 15,
        fontWeight: "bold",
    },

    typho:{
        marginTop: theme.spacing(1),
        fontSize: 15,
        fontWeight: "bold",
    }
  }));

export default function Page4() {

    const classes = useStyles()
    const navigate = useNavigate();
    const [h, seth] = useState(0.64);
    const [p, setp] = useState(2);

    const [result, setresult] = useState("");

    const generate = () => {
        const data = {
        h:h,
        p:p
        
        };
        getDifferentiation(data).then((res) => {
        setresult(res)
        });
    };
    const back = () => {
        navigate("/");
      };
    return (
        <div>
            {/* <Navbar /> */}
            <Typography align="center">
                <Card className={classes.card}>
                    <CardHeader
                    title="บทที่ 4"
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    className={classes.state}
                    />
                    <CardContent>
                    <Grid container spacing={3} alignItems="flex-end">
                        <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            id="outlined-basic"
                            value={h}
                            label="ค่า H"
                            variant="outlined"
                            onChange={(e) => seth(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            id="outlined-basic"
                            value={p}
                            label="ค่า P"
                            variant="outlined"
                            onChange={(e) => setp(e.target.value)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                            id="outlined-read-only-input"
                            label="ผลลัพธ์"
                                value={result===""?"":result}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    </CardContent>
                    <CardActions>
                    <Grid container alignItems="flex-end">
                        <Grid item xs={12} >
                        <Button
                            onClick={generate}
                            fullWidth
                            variant="contained"
                            className={classes.colorButton}
                        >
                            คำนวน
                        </Button>
                        </Grid>
                        <Grid  item xs={12}>
                            <Button
                            onClick={back}
                            fullWidth
                            variant="contained"
                            className={classes.colorButton2}
                            >
                            กลับ
                            </Button>
                        </Grid>
                    </Grid>    
                    </CardActions>
                </Card>
            </Typography>
        </div>
    )
}