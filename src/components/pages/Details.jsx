import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContextProvider";
import AddObj from "./AddObj";
import { Container, Typography, Grid, Button, IconButton } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
const Details = () => {
  const { prodId } = useParams();
  const { idForEdit, oneProduct } = useProductContext();
  const [currentData, setCurrentData] = useState({});
  const [show, setShow] = useState(true);

  const ftog = () => {
    show ? setShow(false) : setShow(true);
  };
  useEffect(() => {
    idForEdit(prodId);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setCurrentData(oneProduct);
    }
  });

  return (
    <div>
      {/* <button onClick={ftog}>+</button> */}
      {/* <Button
        variant="outlined"
        onClick={ftog}
        sx={{ display: "flex", flexDirection: "flex-end" }}
      > */}
      <IconButton onClick={ftog}>
        <AddCardIcon />
      </IconButton>
      {/* </Button> */}

      <div
        style={{
          width: "100%",
          color: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "white",
            width: "50%",
            margin: "0",
            marginRight: "50px",
          }}
        >
          <Typography
            variant="h5"
            align="start"
            m="10px 0"
            sx={{ fontWeight: "bold", backgroundColor: "white" }}
          >
            Общие сведения о пациенте
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">История болезни</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="subtitle1">{currentData.number}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">ФИО</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="subtitle1">{currentData.name}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">Дата Рождения</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography
                variant="subtitle1"
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                {currentData.date}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">Группа крови</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="subtitle1">{currentData.blood}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">Резус фактор</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="subtitle1">
                {currentData.rezusfactor}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">Откуда переведен</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="subtitle1">{currentData.type}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="h6">Лечащий врач</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography variant="subtitle1">{currentData.doctor}</Typography>
            </Grid>
          </Grid>
        </Container>
        {show ? <AddObj oneProduct={oneProduct} sx={{ width: "50%" }} /> : null}
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

      {currentData.temperatures &&
        currentData.temperatures.map((item) => {
          return (
            <div
              style={{
                width: "50%",
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "40px",
                backgroundColor: "white",
              }}
            >
              <Typography
                variant="h5"
                align="start"
                m="10px 0"
                sx={{ fontWeight: "bold", backgroundColor: "white" }}
              >
                Обьективные данные за {item.datehp}
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="h6">Температура</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={9}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="subtitle1">
                    {item.temperature}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="h6">Пульс</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={9}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="subtitle1">{item.pulse}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="h6">Spo2</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={9}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    {item.Spo2}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="h6">АД</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={9}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography variant="subtitle1">{item.AD}</Typography>
                </Grid>
              </Grid>
            </div>
          );
        })}
    </div>
  );
};

export default Details;
