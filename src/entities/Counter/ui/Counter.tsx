import React, { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    // Чтобы action закинуть в reducer
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const inc = () => {
        dispatch(counterActions.increment())
    }
    const dec = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1>value = {counterValue}</h1>
            <Button onClick={inc}>Inc</Button>
            <Button onClick={dec}>Dec</Button>
        </div>
    )
}
