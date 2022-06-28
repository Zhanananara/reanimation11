import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { useProductContext } from "../context/ProductContextProvider";
import React, { useState, useEffect } from "react";

const AddObj = ({ oneProduct }) => {
  const { saveProduct } = useProductContext();
  const [inpValues, setInpValues] = useState({
    temperature: "",
    breathrate: "",
    pulse: "",
    Spo2: "",
    AD: "",
    complaints: "",
    datehp: "",
  });

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    oneProduct.temperatures.push(inpValues);
    saveProduct(oneProduct);
  };
  return (
    <div>
      <div
        // className="obj"
        style={{
          fontSize: "3rem",
          backgroundColor: "white",

          width: "110%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <InputLabel sx={{ fontWeight: "bold" }}>Обьективные данные</InputLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <TextField
            id="temperature"
            name="temperature"
            value={inpValues.temperature}
            label="Температура"
            onChange={(e) => handleChange(e)}
            sx={{ width: 220, marginTop: "20px", fontSize: "1.5rem" }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="breath"
            id="breath"
            name="breathrate"
            value={inpValues.breathrate}
            label="Частота дыхания"
            onChange={(e) => handleChange(e)}
            sx={{
              width: 220,
              marginTop: "20px",
              color: "black",
              fontSize: "16px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          >
            <h2>breath</h2>
          </TextField>
          <TextField
            id="pulse"
            name="pulse"
            value={inpValues.pulse}
            label="Пульс"
            onChange={(e) => handleChange(e)}
            sx={{ width: 220, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="spo2"
            name="Spo2"
            value={inpValues.Spo2}
            label="Spo2"
            onChange={(e) => handleChange(e)}
            sx={{ width: 220, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="AD"
            name="AD"
            value={inpValues.AD}
            label="АД"
            onChange={(e) => handleChange(e)}
            sx={{ width: 220, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="obj"
            name="objStatus"
            value={inpValues.objStatus}
            label="Обьективный статус"
            onChange={(e) => handleChange(e)}
            sx={{ width: 220, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <TextField
          id="complains"
          sx={{ margin: "10px 0" }}
          name="complaints"
          value={inpValues.complaints}
          label="Жалобы"
          fullWidth
          onChange={(e) => handleChange(e)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="datetime-local"
          name="datehp"
          value={inpValues.datehp}
          onChange={(e) => handleChange(e)}
          label="Дата госпитализации"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          sx={{ width: 250, margin: "10px 0" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "black",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "2%",
          }}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default AddObj;
