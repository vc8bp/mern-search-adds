import style from './Add.module.css'

function Add({headline, img, desc, primaryText, url, CTA }) {
  return (
    <div className={`${style.container}`}>
        <img className={`${style.img}`} src={img}></img>
        <div className={`${style.infoContainer}`}>
            <h3 className={`${style.title}`}>{headline}</h3>
            <p className={`${style.ptext}`}>{primaryText}</p>
            <p className={`${style.desc}`}>{desc}</p>
            <button className={`${style.btn}`}><a href={url} target="_blank" >{CTA}</a></button>
        </div>
        
    </div>
  )
}

export default Add