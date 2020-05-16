import React from 'react'
import QrSummary from './QrSummary'
import { Link } from 'react-router-dom'

const QrtList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <div><i className="small material-icons">delete_forever</i>
          <Link to={'/qrcode/show'} key={2}>
            <QrSummary project={project} />
          </Link>
          </div>
        )
      })}  
    </div>
  )
}

export default QrtList
