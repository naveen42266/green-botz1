import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setDetails } from '../store/action/action';
import { RootState } from '../store/reducer';
import ReecoComponent from '../components';

class SampleModel {
  id: string | null = null
  name: string | null = null
  brand: string | null = null
  price: number | null = null
  quantity: number | null = null
  total: number | null = null
  status: "approved" | "missing" | null = null
}

const App = () => {
  const myData = useSelector((state: RootState) => state?.datas?.data);
  const dispatch = useDispatch()
  const [id, setId] = useState<string>('')

  useEffect(() => {
    if (myData?.length == 0 || myData?.length == null) {
      const dummyDataArray = [];

      for (let i = 0; i < 10; i++) {
        let price, quantity;

        do {
          price = Math.floor(Math.random() * 100);
          quantity = Math.floor(Math.random() * 100);
        } while (price === 0 || quantity === 0);

        const details = {
          id: `REECO${Math.floor(Math.random() * 1000000)}`, // Generating a random number for uniqueness
          name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${i + 1}`,
          brand: `Brand ${i + 1}`,
          price,
          quantity,
          total: Math.floor(Math.random() * 100),
          status: null,
        };

        dummyDataArray.push(details);
      }
      dispatch(setDetails(dummyDataArray))
    }

  }, [])
  function handleApprove(id: string) {
    let arr = [] as any
    let details = myData
    let data = myData?.find((ele) => ele?.id == id)
    if (data?.status != "missing") {
      data.status = data?.status == "approved" ? null : "approved"
      details?.forEach((each) => {
        if (each?.id == id) {
          arr?.push?.(data)
        }
        else {
          arr?.push?.(each)
        }
      })
      dispatch(setDetails(arr))
    }

  }

  function handleMissing() {
    let arr = [] as any
    let details = myData
    let data = myData?.find((ele) => ele?.id == id)
    if (data?.status != "approved") {
      data.status = data.status == "missing" ? null : "missing"
      details?.forEach((each) => {
        if (each?.id == id) {
          arr?.push?.(data)
        }
        else {
          arr?.push?.(each)
        }
      })
      dispatch(setDetails(arr))
    }
  }


  return (
    <div className=''>
      <ReecoComponent myData={myData} id={id}
        handleApprove={(id: string) => {
          handleApprove(id)
        }} setId={(id: string) => {
          setId(id)
        }} handleMissing={() => {
          handleMissing()
        }} />
    </div>
  );
}

export default App;
