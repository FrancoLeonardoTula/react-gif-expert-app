import { useState, useEffect } from "react";
import { getGrifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loanding: true,
  });

  useEffect(() => {
    getGrifs(category).then((imgs) => {
      setstate({
        data: imgs,
        loanding: false,
      });
    });
  }, [category]);

  return state; //{ data:[], loanding: true};
};
