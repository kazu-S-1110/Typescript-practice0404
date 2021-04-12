import fetch from 'node-fetch';
export default function callbackSample():void {
  const url = "https://api.github.com/users/kazu-S-1110"


  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log("Asynchronous call back :" ,json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log("Asynchronous call back 2:",profile)


}