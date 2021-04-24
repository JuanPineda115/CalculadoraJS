import React from 'react';
import Calculator from '../Calculator';
import {screen, render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Calculator', () => {
    beforeAll(() => {
        render(<Calculator></Calculator>)
    })

    it('Renderiza la calc con display vacio', () => {
        expect(screen.getAllByTestId("TodaCalc")).not.toBeNull();
        expect(screen.getAllByTestId("calcDisplay")).toBeDefined();
    })

    afterAll(cleanup)
})