import style from './Add.module.css'

function Add({headline, img, desc, primaryText, url, CTA }) {
  url = `https://${url}`;
  return (
    <div className={`${style.container}`}>
        <img className={`${style.img}`} src={img} alt="poster"></img>
        <div className={`${style.infoContainer}`}>
            <h3 className={`${style.title}`}>{headline}</h3>
            <p className={`${style.ptext}`}>{primaryText}</p>
            <p className={`${style.desc}`}>{desc}</p>
            <a href={url} target="_blank" rel="noreferrer">
              <button className={`${style.btn}`}>{CTA}</button>
            </a>
        </div>
        
    </div>
  )
}

export default Add