import React from 'react';
import "@testing-library/jest-dom";
import {render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';

describe('app test',()=>{
    beforeEach(()=> render(<App/>));

    test("header must be rendered",()=>{
        const header = screen.getByText('Emoji Search');
        expect(header).toBeInTheDocument();
    });

    test("Filtering should work",()=>{
        const emoji="Smile";
        const input = screen.getByRole('textbox');
        userEvent.type(input,emoji);
        expect(screen.getByText(emoji)).toBeInTheDocument();

    });

    test("Emoji list should be rendered successfully", () => {
        const items = screen.getAllByText("Click to copy emoji");
        expect(items.length).toEqual(20);
      });

      test("Copying should work",()=>{
        const copyText = screen.getByText("Click to copy emoji");
        userEvent.click(copyText);
        const input = screen.getByRole('textbox');
        userEvent.paste(input,copyText);
        expect(input.length ===1);
      });
    
});