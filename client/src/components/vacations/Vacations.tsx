import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IVacation from '../../models/IVacation';
import Card from '../card/Card';
import './Vacations.css';

function Vacations() {
  let [vacations, setVacations] = useState<IVacation[]>([]);

  useEffect(() => {
    try {
      (async () => {
        const getVacations = await axios.get(
          'http://localhost:3001/vacations/'
        );
        const resuletVacation: IVacation[] = await getVacations.data;
        console.log(resuletVacation);
        if (resuletVacation) {
          setVacations(resuletVacation);
          return vacations;
        } else {
          console.log('resuletVacation is Empty');
          alert('An error has occurred!');
        }
      })();
    } catch (e) {
      console.error(e);
      alert('Login failed');
    }
  }, []);

  return (
    <div className='vactions-page'>
      <section>
        <div className='vac-container'>
          <div className='card-container'>
            {vacations.map((vacation) => {
              return <Card key={vacation.id} vacation={vacation} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vacations;
