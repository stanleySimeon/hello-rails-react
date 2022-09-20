
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetch_greeting } from '../Redux/store';
import { useEffect } from 'react';

const Greeting = () => {
  useEffect(() => {
    dispatch(fetch_greeting());
  }, []);

  const data = useSelector((state) => state).text;
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Greeting;
