import React from 'react'

const Clock02 = () => {
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const html = 
        "<span>"+
        ('0' + (hour > 12 ? hour -12 : hour)).slice(-2) +
        ' : ' +
        ('0' + minutes).slice(-2)+
        ' : '+
        ('0' + seconds).slice(-2)+
        ' '+
        (hour > 12 ? 'PM' : 'AM')
        "</span>";

    const o = {
        __html: html
    };

    return (
        //
        //  HTML 태그를 동적으로 생성하여 JSX element 의 특정 속성(dangerouslySetInnerHTML)
        //  으로 렌더링하는 작업은 금지하고 있지만, 
        //  xss(Cross-Site Scripting) 보호기능을 끄고 사용할 수 있다.
        //
        <div dangerouslySetInnerHTML={o}/>
    )
  }

export default Clock02