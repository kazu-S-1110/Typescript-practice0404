import fetch from 'node-fetch';
export default function promiseSample(): void {
  const url = "https://api.github.com/users/kazu-S-1110"

  type Profile = {
    login: string
    id:number
  }
  type FetchProfile = () => Promise<Profile | null>
  
  const fetchProfile:FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
      .then((res) => {
        res
          .json()
          .then((json:Profile) => {
            console.log("Asynchronous Promise:" ,json)
            resolve(json) //resolveは完了した合図 
          })
          .catch((error) => {
            console.error(error)
            reject(null) //rejectは失敗した合図
          })
      })
      .catch((error) => {
        console.error(error)
        reject(null)
      })
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log("Asynchronous Promise 2:", profile)
      }
    })
    .catch(() => {
    
    })


}