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
    if(!response.ok){
      console.log("error:",response.status,response.statusText)
      return
    }

    const json = await response.json();
    if(json.result !== 'success'){
      console.log("error:",json.message)
      return;
    }

    setEmails(json.data)
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