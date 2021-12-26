import Tag from 'components/Tag'
import styles from './Post.module.css'
import React, { useState } from 'react'
import useDateTimeFormat from 'hooks/useDateTimeFormat'
import useTimeAgo from 'hooks/useTimeAgo'

export default function Post ({ mainTitle, mainFooter, mainDescription, section, tags, id, createdAt }) {
  const [showMoreInfo, setCount] = useState(false)
  const timeago = useTimeAgo(createdAt.seconds)
  const createdAtFormated = useDateTimeFormat(createdAt.seconds)

  const toggleShowMoreInfo = () => {
    setCount(!showMoreInfo)
  }

  return (
          <>
              <div className={styles.postContainer} onClick={toggleShowMoreInfo}>
                  <header className={styles.postHeader}>
                    <h2 className={styles.postHeaderTitle} title={id} >{mainTitle}</h2>               
                    <h6>
                      <time 
                        className={styles.postHeaderTime} 
                        title={createdAtFormated}>{timeago}
                      </time>
                    </h6>
                  </header>

                  <section className={styles.postBody}>

                  { mainDescription ? <p className={styles.containerSectionsText}>{mainDescription}</p> : <></>}
                 
                  <div className={styles.containerSections}>
                      {section && section.map(({ title, description, src }) => (
                          <>
                            { title && <h3>{title}</h3> }
                            { description && <p className={styles.containerSectionsText}>{description}</p> }

                             { src &&
                              src.map((text, index) => (
                                <>
                                  <div className={styles.containerSrc}>
                                    <img key={index} className={styles.src} src={text} alt="resource image" />
                                  </div>
                                </>
                                
                              ))}
                
                          </>
                      ))}
                  </div>
                  <div className={styles.containerTags}>
                        {tags && tags.map((text, index) => (
                              <Tag key={index}>{text}</Tag>
                        ))}
                    </div>
                  </section>              

                  <footer className={styles.postFooter}>
                    
                    <p className={styles.textFooter}>{ mainFooter && <p>{mainFooter}</p> }  </p>                

                    <div className={styles.makeItContainer}>
                       <h4 className={styles.makeItTitle}>Sheila Denamiel</h4> 
                       <time className={styles.makeItTime} 
                        title={timeago} >{createdAtFormated}</time>
                    </div>                                    
                  </footer>

              </div>
          </>
  )
}
