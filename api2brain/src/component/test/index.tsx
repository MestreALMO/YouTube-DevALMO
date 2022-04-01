import { useState, useEffect } from "react";
import axios from "axios";

import { usePerguntasRepostas } from "../../context/count";

export const Test = () => {
  const api = axios.create({ baseURL: "/api" });
  const [users, setUsers] = useState();

  useEffect(() => {
    api
      .get(
        "http://core-api-cb-customersuccess-sit.ocp-eqx.dc.nova/v1/answers/categorie/2589"
      )
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Test</h1>
      {/* {console.log(count)} */}
    </>
  );
};
