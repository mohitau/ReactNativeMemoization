import React, { useState, useCallback, useMemo} from 'react'
import {
    View, Text, StyleSheet, Button,
} from 'react-native'
import ChildItem from '../components/ChildItem'

const MainScreen = () => {
    const [clicks, setClicks] = useState(0)
    const [childClicks, setChildClicks] = useState(0)
    const [number, setNumbers] = useState({a: 16, b:4})
    console.log("Parent re-rendered")

    const onParentStateHandler = () => {
         setClicks(clicks+1)
    }
    const onChildClickHandler = useCallback(() => {
        setChildClicks(childClicks+1)
    }, [childClicks])

    const calculateSum = () => {
        console.log('Sum calculate function called')
        return number.a + number.b
    }

    const memoizedFunction = useMemo(() => calculateSum(),[number])

    return (
        <View style={styles.mainContainer}>
            <Button title="Parent Button" onPress={onParentStateHandler}/>
            <Text>I am from Parent. Click {clicks} times</Text>
            <Text>Click from child {childClicks} times</Text>
            <ChildItem onClick={onChildClickHandler} title="I am Child A"/>
            <Text>{memoizedFunction} is the sum</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        height: 50,
        width: '90%',
        marginTop: 20
    },
})

export default MainScreen