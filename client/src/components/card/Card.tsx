import React from 'react';
import IVacation from '../../models/IVacation';
import '../vacations/Vacations.css';

export interface IVacationCard {
  vacation: IVacation;
}
function Card(props: IVacationCard) {
  let { vacation } = props;
  let followersImg =
    'https://img.icons8.com/external-wanicon-flat-wanicon/2x/external-followers-influencer-marketing-wanicon-flat-wanicon.png';
  let addtofollow =
    'https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-follow-live-streaming-flaticons-flat-flat-icons.png';
  return (
    <div className='card'>
      <div className='imgBx'>
        <img src={vacation.imageUrl} alt={vacation.destination} />
        <h2>{vacation.destination}</h2>
      </div>
      <div className='content'>
        <div className='price'>
          <h3>Price:</h3>
          <span>{vacation.price}</span>
        </div>
        <div className='dates'>
          <h3>Start Date :</h3>
          <span>{vacation.startDate}</span>
          <h3>End Date :</h3>
          <span>{vacation.endDate}</span>
        </div>

        <div className='social'>
          <img src={followersImg} width='40px' />
          <span>{vacation.amountOfFollowers}</span>
          <img src={addtofollow} width='40px' />

          <span>{vacation.isFollowed}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
