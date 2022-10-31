import React, {useState, useEffect} from 'react'
import '../../App.css'
import { AddsData } from '../../DummyData'
import Add from './components/Add/Add'
import style from "./Home.module.css"

function Home() {
  const [search, setsearch] = useState("")
  const [data, setdata] = useState()

  useEffect(() => {
    console.log(search)
  }, [search])
  

  return (
    <>
    <div className={`container ${style.container}`}>
        <div className={`${style.wrapper}`}>
            <div className={`${style.inputWrapper}`}>
                <input type="text" className={`${style.input}`} onChange={(e) => setsearch(e.target.value)} />
                <button className={`${style.btn}`}>Search</button>
            </div>
        </div>
    </div>

    <div className={`container ${style.adds}`}>
      {AddsData.map((e) => {
          return <Add headline={e.headline} img={e.imageUrl} desc={e.description} primaryText={e.primaryText} url={e.company.url} key={e._id} CTA={e.CTA}/>
        }
      )}
    </div>
    </>
  )
}

export default Home