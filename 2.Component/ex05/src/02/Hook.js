import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState(null);
    const [title, setTitle] = useState('');
    const h3Ref = useRef(null);

    /**
     *   1. Alternative 01: getDerivedStateFromProps
     *   if문에 걸리면 렌더링되고 컴포넌트가 한번 더 호출됨
     */
    if(boxColor !== color ) {
        setBoxColor(color);
    }

    /**
     *   2. After Rendering 함수( 상태의 변화 -> 렌더링 -> 함수)
     *   class component lifecycle(componentDidMount, componentDidUpdate)
     */
    useEffect(() => {
        console.log('After Rendering');
    });

    /**
     *  3. 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수
     *     : 관심 분리
     */
    useEffect(() => {
        console.log('Update Color(DB) Using APIs...');
    }, [boxColor]);


    /**
     *  4. Alternative 02: componentDidMount & componentWillUnmount
     */
    useEffect(() => {
        console.log('After Mount(componentDidMount)'); // mount 될때 불림
        return (function(){ //unmount될때 불림
            console.log('After Unmount(componentWillUnmount)');
        });
    }, []);

    return (
        <Fragment>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: boxColor
                } }
                ref={ h3Ref } />
            <input
                type='text'
                value={ title }
                onChange={ (e) => setTitle(e.target.value) } />
        </Fragment>
    );
}