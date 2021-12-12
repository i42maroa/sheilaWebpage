import Tag from 'components/Tag'
import styles from './Post.module.css'
import React, { useState } from 'react'
import useDateTimeFormat from 'hooks/useDateTimeFormat'
import useTimeAgo from 'hooks/useTimeAgo'

export default function Post ({ title, src, description, tags, id, createdAt }) {
  const [showMoreInfo, setCount] = useState(false)
  const timeago = useTimeAgo(createdAt.seconds)
  const createdAtFormated = useDateTimeFormat(createdAt.seconds)

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
                      ? <time title={timeago} >{createdAtFormated}</time>
                      : <time title={createdAtFormated}>{timeago}</time> }

              </div>
          </>
  )
}
