import React, { useState } from 'react';
import firebase from '../../util/firebase';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const [name, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postal, setPostalCode] = useState('');
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleOnChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleOnChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleOnChangePostal = (e) => {
    setPostalCode(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      name,
      email,
      lastname,
      city,
      country,
      postal
    };

    todoRef.push(todo);
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Students</h4>
              <p className={classes.cardCategoryWhite}>Complete student profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                    labelText="Email"
                    id="email"
              
                    
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChangeEmail,
                      value : email
                  }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
              
                    
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChange,
                      value : name
                  }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
              
                    
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChangeLastName,
                      value : lastname
                  }}
                  />
                </GridItem>
               
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="City"
                    id="city"
              
                    
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChangeCity,
                      value : city
                  }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Country"
                    id="country"
              
                    
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChangeCountry,
                      value : country
                  }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal"
              
                    
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleOnChangePostal,
                      value : postal
                  }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
    
              <Button color="primary" onClick={createTodo}>Save Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
