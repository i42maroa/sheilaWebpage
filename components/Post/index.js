import Tag from 'components/Tag'
import styles from './Post.module.css'
import React, { useState } from 'react'

export default function Post ({ title, src, description, tags, id }) {
  const [showMoreInfo, setCount] = useState(false)

  const toggleShowMoreInfo = () => {
    setCount(!showMoreInfo)
  }

  return (
          <>
              <div className={styles.postContainer} onClick={toggleShowMoreInfo}>
                    <h2>{title}</h2>
                    <p>{id}</p>

                    {showMoreInfo
                      ? <>
                      <img src={src} alt="resource image" width="500" height="600"/>
                      <p>{description}</p>
                    </>
                      : null }
                    <div className={styles.containerTags}>
                        {tags.map(
                          (text, index) => (
                              <Tag key={index}>{text}</Tag>
                          ))}
                    </div>

                    {showMoreInfo
                      ? <p>05-12-2021</p>
                      : null }

              </div>
          </>
  )
}
