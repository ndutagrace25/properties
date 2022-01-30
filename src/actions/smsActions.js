import axios from "axios";
import Swal from "sweetalert2";
import { CREATE_SMS } from "./types";

export const sendMessage = (data) => (dispatch) => {
  let url = `https://menubackend.herokuapp.com/sms`;

  axios
    .post(url, data)
    .then((response) => {
      dispatch({
        type: CREATE_SMS,
        payload: response.data,
      });
      Swal.fire("Success", "You will be contacted in a few..", "success");
    })
    .catch((err) => console.log(err));
};
