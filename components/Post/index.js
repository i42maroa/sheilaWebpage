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
                    <h2 title={id} >{mainTitle}</h2><h4>
                    <span> · </span>
                    <time className={styles.postHeaderTime} title={createdAtFormated}>{timeago}</time></h4>
                  </header>

                  { mainDescription ? <p>{mainDescription}</p> : ''}

                  <div className={styles.containerSections}>
                      {section.map(({ title, description, src }) => (
                          <>
                            { title && <h3>{title}</h3> }
                            { description && <p>{description}</p> }
                            <div className={styles.containerSrc}> { src &&
                              src.map((text, index) => (
                                <img key={index} className={styles.src} src={text} alt="resource image" />
                              ))}
                            </div>
                          </>
                      ))}
                  </div>

                  <footer className={styles.footer}>

                    { mainFooter && <p>{mainFooter}</p> }

                    <div className={styles.containerTags}>
                        {tags.map((text, index) => (
                              <Tag key={index}>{text}</Tag>
                        ))}
                    </div>

                    <h4>Hecho por Sheila Denamiel</h4>
                    <time title={timeago} >{createdAtFormated}</time>
                  </footer>

              </div>
          </>
  )
}
