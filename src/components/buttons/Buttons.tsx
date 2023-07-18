import './buttons.css'
import { Parser } from 'expr-eval';

export default function Buttons(props: any) {
    const {buttons, setView, view, setDecimal, decimal} = props;

    function symbol(symb: string) {
        switch(symb) {
            case 'AC':
                setView('0')
                break;
        }
    }

    
    return (
        <div id="button-wrapper">
            <div className='button-container'>
                {buttons.map((obj: any) => (
                    <button key={obj.id} className='button' id={obj.id} onClick={() => {
                        
                        
                        if(view === '0') {
                            setView(obj.symb)
                            setDecimal(obj.symb)
                        } else {
                            setView(view + obj.symb)
                            setDecimal(decimal + obj.symb)
                        }

                        if(obj.symb === '/' || obj.symb === '+' || obj.symb === '*' || obj.symb === '-') {
                            setView(decimal + obj.symb)
                            setDecimal('')
                                if(view !== decimal) {
                                    setView(view + obj.symb)
                                }
                        }

                        if(obj.symb === '=') {
                            // eslint-disable-next-line
                            let filter = view.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
                            setView(Parser.evaluate(filter).toString());
                        }

                        if(obj.symb === '.') {
                            setDecimal(decimal + obj.symb)
                            setView(view + obj.symb)
                                if(decimal.includes('.')) {
                                    setDecimal(decimal)
                                    setView(view)
                                }
                        }

                        if(obj.symb === 'AC') {
                            symbol(obj.symb)
                        }
                        
                    }} >{obj.symb}</button>
                ))}
            </div>
        </div>
    )
}