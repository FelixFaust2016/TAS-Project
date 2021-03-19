import axios from 'axios';
import { apiConfig, client } from '../config/axios';
// import { socket, privateMessenger } from '../config/socketConfig';

// export const storeMessage = (message) => {
//     return {
//         type: 'STORE_MESSAGE',
//         message
//     }
// }


export const verifyNIN = (nin) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            console.warn(nin);
            client.post(apiConfig.baseUrl + 'nin-verification/verify-nin',
                {
                    nin
                }).then((res) => {

                    // console.log(res.data.data.return.data[0]);
                    console.log(res.status);
                    // setData(res.data.data.return.data[0]);

                    if (res) {
                        if (res.data.data.return.returnMessage === "success") {

                            return resolve(res.data.data.return.data[0])
                        }
                        if (res.data.data.return.returnMessage === "norecord") {
                            return resolve("no records found for this NIN number")
                            
                        }
                        if (res.data.data.return.returnMessage ===  "nin must be length = 11"){
                            console.log("dbvaisbvubdi")
                            return resolve("NIN number must be an 11 digit number")
                        }
                    }
                    // dispatch({ type: SIGNUP_USER_FAILED, payload: true });
                })
                .catch(err => {
                    return reject({ message: "something went wrong" + String(err) })
                })
        })

    }

}