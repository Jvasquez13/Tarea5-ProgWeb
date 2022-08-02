const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const contacts = [
  {
    "nombre": "Javier",
    "apellido": "Aquino",
    "telefono": "829-667-1078",
  },
  {
    "nombre": "Eduardo",
    "apellido": "Aquino",
    "telefono": "829-647-1378",
  }
];



app.get('/contacts', (req, res) => {

  const info = {
    data: contacts
  }
  res.send(info);
  
});


app.post('/addContacts', (req, res) => {
    const contact = {
      "nombre": req.body.nombre,
      "apellido": req.body.apellido,
      "telefono": req.body.telefono,
    }

    contacts.push(contact);

    const status = {
      data: contact,
      status: "Contacto agregado",
      success: true
    }
    res.send(status);

});


app.listen(8080, () => {
  console.log('El servidor esta ejecutandose en el puerto 8080');
});
