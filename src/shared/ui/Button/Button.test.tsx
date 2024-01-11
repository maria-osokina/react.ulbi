import { render,screen } from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";
import { ButtonTheme } from "./Button";


describe('Button', () => {
    test('Test render',()=>{
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })

    test('Clear theme',()=>{
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    })
});