import React, { useEffect } from 'react'
import NavLayout from '../layouts/NavLayout'
import { useParams } from 'react-router-dom';
import { Link as Anchor } from 'react-router-dom';
import FooterLayout from '../layouts/FooterLayout';
import { useDispatch, useSelector } from 'react-redux';
import city_actions from '../store/actions/cities';
import itinerary_actions from '../store/actions/itineraries';
const { read_city } = city_actions;
const { read_itineraries_from_city } = itinerary_actions
import ItineraryCard from '../components/ItineraryCard';
import CityDescription from '../components/CityDescription';

export default function CityDetail () {
  const { id } = useParams()
  const dispatch = useDispatch();
  const itineraries = useSelector(store => store.itineraries.itineraries_from_city)
  console.log(itineraries);

  useEffect(
    ()=>{
      dispatch(read_city({ id:id }));
      dispatch(read_itineraries_from_city({city_id:id}))
    },[]
  )
  const city = useSelector(store => store.cities.city)

  return (
    <div className="flex flex-col justify-between items-center h-[100vh]">
      <NavLayout />
      <CityDescription 
        city={city.city}
        smalldescription={city.smalldescription}
        photo={city.photo}
      />
      <div className='flex flex-col justify-end text-center w-[40vw]  rounded-lg gap-6 py-[5vh]'>
        <p className='text-[2rem]'>Itineraries:</p>
        {itineraries.map((each) => 
          <>
            <ItineraryCard 
              userphoto={each.userphoto}  
              username={each.username}
              photo={each.photo}
              name={each.name}
              price={each.price}
              duration={each.duration}
              tags={each.tags}
              id={each._id}
              />
          </>
        )}
        {itineraries.length == 0 ? 
        ( <div className='flex items-center justify-center bg-slate-400 rounded-lg h-[5rem]'>
            <p>There are no itineraries for this city yet... 😥</p> 
          </div>) : 
        ("")}
      </div>
      <Anchor to="/cities" className="font-bold text-1xl font-preahvihear hover:text-white bg-sky-700 p-4 rounded-lg m-4" href="">
        Back to Cities
      </Anchor>
      <FooterLayout />
    </div>
  )
}
