
import React from 'react'
import List from './List.jsx'

class Posts extends React.Component {

  render () {
    return (
      <main className='mb4'>
        <List
          title='User Experience'
          id='user-experience'
          links={this.props.posts.ux} />
        <List
          title='Front-End Development and Design'
          id='front-end'
          links={this.props.posts.frontEnd} />
        <List
          title='Design in General'
          id='design'
          links={this.props.posts.design} />
        <List
          title='Content Strategy and Copywriting'
          id='content'
          links={this.props.posts.content} />
        <List
          title='Further Reading'
          id='related'
          links={this.props.posts.related} />
      </main>
    )
  }

}

export default Posts

