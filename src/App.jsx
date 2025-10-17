import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Page1Content from './components/section1/Page1Content'

const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976',
      intro:'',
      color:'aqua',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHx3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
      intro:'',
      color:'orange',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      intro:'',
      color:'pink',
      tag:'Underbanked'
    },
      {
      img:'https://images.unsplash.com/photo-1613324996029-f6190a17838f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHx3b3JraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
      intro:'',
      color:'black',
      tag:'Underbanked'
    }
  ]
  return (
    <div >
    <Section1 users={users}/>
    <Section2/>
   
    </div>
  )
}

export default App