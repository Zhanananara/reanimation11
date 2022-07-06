import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { firestore } from "../../src/firebase";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import "./Form.css";
import Stack from "@mui/material/Stack";
import { Button, Input, IconButton } from "@mui/material";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  collection,
  deleteDoc,
  doc,
  addDoc,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import "./Contact.scss";
const ContactContextProvider = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [datehp, setDatehp] = useState("");
  const [blood, setBlood] = useState("");
  const [doctor, setDoctor] = useState("");
  const [dop, setDop] = useState("");
  const [rezusfactor, setRezusfactor] = useState("");
  const [temperature, setTemp] = useState("");
  const [breathrate, setBreath] = useState("");
  const [pulse, setPulse] = useState("");
  const [Spo2, setSpo2] = useState("");
  const [AD, setAD] = useState("");
  const [complaints, setComplaints] = useState("");
  const [objStatus, setObjStatus] = useState("");

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  //Creating new message
  async function addContact() {
    try {
      await addDoc(collection(firestore, "contacts"), {
        name: name,
        number: number,
        type: type,
        doctor: doctor,
        date: date,
        description: description,
        datehp: datehp,
        blood: blood,
        rezusfactor: rezusfactor,
        dop: dop,
        temperature: temperature,
        breathrate: breathrate,
        pulse: pulse,
        Spo2: Spo2,
        AD: AD,
        complaints: complaints,
        objStatus: objStatus,
      });
      setName("");
      setBlood("");
      setData("");
      setDatehp("");
      setDescription("");
      setDoctor("");
      setType("");
      setNumber("");
      setDop("");
      setRezusfactor("");
      setAD("");
      setBreath("");
      setComplaints("");
      setSpo2("");
      setPulse("");
      setTemp("");
      setObjStatus("");
      navigate("/list");
    } catch (err) {
      console.log(err);
    }

    getContacts();
    // console.log(collection);
  }

  //Render of contacts
  const getContacts = async () => {
    const docRef = query(
      collection(firestore, "contacts"),
      orderBy("createdAt")
    );
    // const docSnap = await getDocs(docRef);
    //console.log(docSnap);

    //here
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data(), "doc here");
        msgs.push(doc.data());
      });
      setData(msgs);
    });
    // end

    // if (docSnap.empty) {
    //
  };

  useEffect(() => {
    getContacts();
  }, []);
  // }, [data]);

  //Delete one message
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, "contacts", id));
      //setData(data.filter((msg) => msg.id !== id));
    } catch (err) {
      console.log(err);
    }
    getContacts();
  };
  const handleReset = () => {
    setType("doctor");
  };
  return (
    <div style={{ fontSize: "1.5rem", color: "red" }}>
      <div style={{ display: "flex", color: "white" }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <h2>Добавить данные пациента</h2>
      </div>
      <div
        className="form-border"
        style={{ margin: "1% 2%", backgroundColor: "white", zIndex: "1" }}
      >
        <TextField
          name="number"
          value={number}
          type="number"
          onChange={(e) => setNumber(e.target.value)}
          id="standard-basic"
          label="История болезни"
          variant="standard"
          sx={{ color: "white" }}
          margin="normal"
        />
        <br />
        <TextField
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="standard-basic"
          label="ФИО"
          variant="standard"
          sx={{ color: "white", width: "90%", marginTop: "20px" }}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Переведен</InputLabel>
          <Select
            sx={{ marginTop: "20px", zIndex: "1" }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="type"
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value={"Кардиология"}>Кардиология</MenuItem>
            <MenuItem value={"Неврология"}>Неврология</MenuItem>
            <MenuItem value={"Хирургия"}>Хирургия</MenuItem>
            <MenuItem value={"Терапия"}>Терапия</MenuItem>
            <MenuItem value={"Травмотология"}>Травмотология</MenuItem>
            <MenuItem value={"Урология"}>Урология</MenuItem>
            <MenuItem value={"Отделение ЛОР"}>Отделение ЛОР</MenuItem>
            <MenuItem value={"Детское отделение"}>Детское отделение</MenuItem>
            <MenuItem value={"Инфекционное отделение"}>
              Инфекционное отделение
            </MenuItem>
            <MenuItem value={"Онкология"}>Онкология</MenuItem>
            <MenuItem value={"Отделение офтальмологии"}>
              Отделение офтальмологии
            </MenuItem>
            <MenuItem value={"Отделение психо-наркологии"}>
              Отделение психо-наркологии
            </MenuItem>
            <MenuItem value={"Отделение краткосрочного пребывания"}>
              Отделение краткосрочного пребывания
            </MenuItem>
          </Select>
        </FormControl>

        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="date"
            value={date}
            label="Дата рождения"
            type="date"
            defaultValue="2022-06-07"
            onChange={(e) => setDate(e.target.value)}
            sx={{ width: 220, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Группа крови</InputLabel>
          <Select
            sx={{ marginTop: "20px" }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="type"
            value={blood}
            label="Type"
            onChange={(e) => setBlood(e.target.value)}
          >
            <MenuItem value={"O"}>O</MenuItem>
            <MenuItem value={"A"}>A</MenuItem>
            <MenuItem value={"B"}>B</MenuItem>
            <MenuItem value={"AB"}>AB</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Резус фактор</InputLabel>
          <Select
            sx={{ marginTop: "20px" }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="type"
            value={rezusfactor}
            label="Type"
            onChange={(e) => setRezusfactor(e.target.value)}
          >
            <MenuItem value={"Положительный"}>Положительный</MenuItem>
            <MenuItem value={"Отрицательный"}>Отрицательный</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Состояние</InputLabel>
          <Select
            sx={{ marginTop: "20px" }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="description"
            value={description}
            label="Type"
            onChange={(e) => setDescription(e.target.value)}
          >
            <MenuItem value={"Тяжелое"}>Тяжелое</MenuItem>
            <MenuItem value={"Крайне тяжелое"}>Крайне тяжелое</MenuItem>
            <MenuItem value={"Огональное"}>Огональное</MenuItem>
          </Select>
        </FormControl>

        <div className="obj" style={{ fontSize: "3rem" }}>
          {/* <FormControl fullWidth margin="normal"> */}
          <InputLabel
            // id="demo-simple-select-label"
            sx={{ width: "600px", marginTop: "20px" }}
          >
            Обьективные данные
          </InputLabel>
          {/* <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="description"
            // value={description}
            label="Type"
            // onChange={(e) => setDescription(e.target.value)}
          > */}
          <TextField
            id="temperature"
            value={temperature}
            label="Температура"
            onChange={(e) => setTemp(e.target.value)}
            sx={{ width: 220, marginTop: "20px", fontSize: "1.5rem" }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="breath"
            id="breath"
            value={breathrate}
            label="Частота дыхания"
            onChange={(e) => setBreath(e.target.value)}
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
            value={pulse}
            label="Пульс"
            onChange={(e) => setPulse(e.target.value)}
            sx={{ width: 220, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="spo2"
            value={Spo2}
            label="Spo2"
            onChange={(e) => setSpo2(e.target.value)}
            sx={{ width: 220, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="AD"
            value={AD}
            label="АД"
            onChange={(e) => setAD(e.target.value)}
            sx={{ width: 220, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <TextField
            id="complains"
            value={complaints}
            label="Жалобы"
            onChange={(e) => setComplaints(e.target.value)}
            sx={{ width: "50%", marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <TextField
            id="obj"
            value={objStatus}
            label="Обьективный статус"
            onChange={(e) => setObjStatus(e.target.value)}
            sx={{ width: "50%", marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {/* </Select> */}
          {/* </FormControl> */}
        </div>

        <TextField
          name="name"
          value={dop}
          onChange={(e) => setDop(e.target.value)}
          id="standard-basic"
          label="Рекомендации"
          variant="standard"
          sx={{ color: "white", marginTop: "20px", width: "100%" }}
          margin="normal"
        />

        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="datetime-local"
            value={datehp}
            onChange={(e) => setDatehp(e.target.value)}
            label="Дата госпитализации"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250, marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Лечащий врач</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="doctor"
            value={doctor}
            label="Type"
            onChange={(e) => setDoctor(e.target.value)}
            sx={{ marginTop: "20px" }}
          >
            <MenuItem value={"Усеналиев Чолпонбек Эркинбекович"}>
              Усеналиев Чолпонбек Эркинбекович
            </MenuItem>
            <MenuItem value={"Матиев Ысакбек Рашидович"}>
              Матиев Ысакбек Рашидович
            </MenuItem>
            <MenuItem value={"Тынчтыкбеков Талант Тынчтыкбекович"}>
              Тынчтыкбеков Талант Тынчтыкбекович
            </MenuItem>
            <MenuItem value={"Исаева Айгерим Сапаргалиевна"}>
              Исаева Айгерим Сапаргалиевна
            </MenuItem>
            <MenuItem value={"Жаманкулова Фарида ахмеджановна"}>
              Жаманкулова Фарида Ахмеджановна
            </MenuItem>
          </Select>
        </FormControl>

        <div
          className="button"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            type="submit"
            variant="contained"
            onClick={() => addContact()}
            sx={{
              backgroundColor: "black",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              width: "30%",
              margin: "2%",
            }}
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactContextProvider;
