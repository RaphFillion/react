import axios from 'axios'
import { useState } from 'react'

export default function useLoadData() {
  const [datas, setDatas] = useState(null)

  const loadData = (route) => {
    axios.get(route)
      .then(res => {
        setDatas(res.data)
      })
      .catch(err => console.log(err))
  }
  return [datas, loadData]
}