import React from 'react'
import styles from "./styles.module.css"
//width ve height dışardan alıyoruz.çünkü kategoriler ile kartların width height ı eşit değil. bunu yukarıdan alıyoruz. 
function Skeleton({width, height}) {
  return (
    <div className={styles.skeleton} style={{width, height}}></div>
  )
}

export default Skeleton