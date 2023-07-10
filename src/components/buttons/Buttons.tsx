
import './buttons.css'

export default function Buttons(props: any) {
    const {buttons, setView, setTotalView, view, totalView} = props;

    let divide = false;
    let subtract = false;
    let addition = false;
    let multiply = false;

    function symbol(symb: string) {
        switch(symb) {
            case '/' :
                divide = true;
                subtract = false;
                addition = false;
                multiply = false;
                console.log(divide)
                break;
            case '+' :
                divide = false;
                subtract = false;
                addition = true;
                multiply = false;
                console.log(addition)
                break;
            case '-':
                divide = false;
                subtract = true;
                addition = false;
                multiply = false;
                console.log(subtract)
                break;
            case '*':
                divide = false;
                subtract = false;
                addition = false;
                multiply = true;
                console.log(multiply)
                break;
            case 'AC':
                setView('0')
                break;
        }
    }

    return (
        <div id="button-wrapper">
            {buttons.map((obj: any) => (
                <button key={obj.id} className='button' id={obj.id} onClick={() => {
                    if(view === '0') {
                        setView(obj.symb)
                    } else {
                        setView(view + obj.symb)
                    }

                    symbol(obj.symb)
                    
                }} >{obj.symb}</button>
            ))}
        </div>
    )
}