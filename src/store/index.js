import React from 'react'
import { configureStore } from '@reduxjs/toolkit'

// we can import in any name
import configReducer from './config'

export const store = configureStore({
    reducer:{
        config: configReducer
    }
})