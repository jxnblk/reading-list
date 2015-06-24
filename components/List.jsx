
import React from 'react'

class List extends React.Component {

  render () {
    return (
      <section id={this.props.id}
        className='mb4'>
        <h2>
          <a href={'#' + this.props.id}>
            {this.props.title}
          </a>
        </h2>
        <ul className='list-reset'>
          {this.props.links.map(function(link, i) {
            return (
              <li key={i}>
                <h3 className='mb0'>
                  <a href={link.href}>
                    {link.title}
                  </a>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: link.description }} />
              </li>
            )
          })}
        </ul>
      </section>
    )
  }

}

export default List

