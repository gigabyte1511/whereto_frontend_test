

// Get album list method
export const getAlbumList = () => fetch('http://demo.subsonic.org/rest/getAlbumList2?u=guest&p=guest&v=1.12.0&c=myapp&type=newest&f=json', {
  method: 'GET',
})
  .then((res) => {
    if (res.status !== 200) {
      return res.json().then((data) => {
        throw new Error(data.message)
      })
    }
    return res.json()
  })
  .then((data) => data['subsonic-response'].albumList2.album)

// Get album by ID method
export const getAlbumById = ({ queryKey }:{queryKey:string[]}) => {
  const [_key, id] = queryKey
  return fetch(`http://demo.subsonic.org/rest/getAlbum?u=guest&p=guest&v=1.12.0&c=myapp&f=json&id=${id}`, {
    method: 'GET',
  })
    .then((res) => {
      if (res.status !== 200) {
        return res.json().then((data) => {
          throw new Error(data.message)
        })
      }
      return res.json()
    })
    .then((data) => data['subsonic-response'].album)
}

// Get cover art by ID method

// export const getCoverArtId = ({ queryKey }) => {
//   const [_key, id] = queryKey
//   return fetch(`http://demo.subsonic.org/rest/getCoverArt?u=guest&p=guest&v=1.12.0&c=myapp&id=${id}`, {
//     method: 'GET',
//   })
//     .then((res) => {
//       if (res.status !== 200) {
//         return res.json().then((data) => {
//           throw new Error(data.message)
//         })
//       }
//       return res.json()
//     })
//     .then((data) => data)
// }
