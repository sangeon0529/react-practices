import React, { useState, useEffect} from 'react'
import './assets/scss/App.scss'
import RegisterForm from './RegisterForm'
import SearchBar from './SearchBar'
import Emaillist from './Emaillist'
import data from './assets/json/data.json'

const App = () => {
  const [emails, setEmails] = useState(data)

  useEffect(async () => {
    const response = await fetch('/api' , {
      method: 'get',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body:null
    })

    console.log(response)
  }, [])
  
  const notifyKeywordChange= function(kw){
    setEmails(data.filter(e => e.firstName.indexOf(kw) != -1 || e.lastName.indexOf(kw) != -1|| e.email.indexOf(kw)!=-1))
  }

  return (
    <div className={'App'}>
        <RegisterForm />
        <SearchBar callback={notifyKeywordChange}/>
        <Emaillist emails={emails} />

    </div>
  )
}

export default App