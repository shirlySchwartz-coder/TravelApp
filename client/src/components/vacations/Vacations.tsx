import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IVacation from '../../models/IVacation';

function Vacations() {
  let [ vacations, setVacations] = useState<IVacation[]>([]);

  useEffect(() => {
    axios('http://localhost:3001/vacations/').
    then((response) => {
      let serverResponse =response.data;
      setVacations(serverResponse);
      console.log(vacations);
    })
    .catch();
  },[])
  
  return <div>Vacations</div>;
}

export default Vacations;
