import React from "react"
import { render, fireEvent } from "@testing-library/react"
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from "./button.view"
import { StyledButtonContainer } from "./button.styled"

describe("components/Button:", () => {
    it("should be a button", () => {
        render(<Button label="Button" />)
        const headerElement = document.getElementsByTagName("button")[0]
        expect(headerElement).toBeInTheDocument()
    })

    it("should have a label", () => {
        const { getByText, rerender } = render(<Button label="Button" />)
        expect(getByText(/Button/i)).toBeInTheDocument()

        rerender(<Button label="OK" />)
        expect(getByText(/OK/i)).toBeInTheDocument()
    })

    it("should be Clickable", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button label="Button" onClick={onClickMock} />)
        
        fireEvent.click(getByText(/Button/i));
        fireEvent.click(getByText(/Button/i));

        expect(onClickMock).toBeCalledTimes(2)
    })

    it("should be able to change theme", () => {
        const treePrimary = renderer.create(<StyledButtonContainer primary />).toJSON()
        expect(treePrimary).toMatchSnapshot()

        const treeSecondary = renderer.create(<StyledButtonContainer primary={false} />).toJSON()
        expect(treeSecondary).toMatchSnapshot()
    })
})
