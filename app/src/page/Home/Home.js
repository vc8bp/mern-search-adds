import React, {useState, useEffect} from 'react'
import '../../App.css'
import Add from './components/Add/Add'
import style from "./Home.module.css"

function Home() {
  const [search, setsearch] = useState("")
  const [data, setdata] = useState()

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:4000/api/adds?')
      const json = await res.json();
      console.log(json)
      setdata(json)
    }
    getData()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:4000/api/adds?s=${search}`)
    const json = await res.json();
    console.log(json.adds)
    setdata(json)
  }
  

  return (
    <>
    <div className={`${style.container}`}>
            <form className={`${style.searchForm}`}>
                <input type="text" className={`${style.input}`} onChange={(e) => setsearch(e.target.value)} />
                <button className={`${style.btn}`} onClick={handleSearch}>Search</button>
            </form>
    </div>
    <div className={`container ${style.adds}`}>  
      {data?.map((e) => {
          return <Add headline={e.headline} img={e.imageUrl} desc={e.description} primaryText={e.primaryText} url={e.company.url} key={e._id} CTA={e.CTA}/>
        }
      )}
    </div>
    </>
  )
}

export default Home