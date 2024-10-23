



import React, { useState, useEffect } from 'react';
import './Calculator.css'; 

function Calculator() {
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [operation, setOperation] = useState(undefined);

    const clear = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation(undefined);
    };

    const deleteDigit = () => {
        setCurrentOperand(currentOperand.toString().slice(0, -1));
    };

    const appendNumber = (number) => {
        if (number === '.' && currentOperand.includes('.')) return;
        setCurrentOperand(currentOperand + number);
    };

    const chooseOperation = (op) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        setOperation(op);
        setPreviousOperand(currentOperand);
        setCurrentOperand('');
    };

    const compute = () => {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        setCurrentOperand(computation);
        setOperation(undefined);
        setPreviousOperand('');
    };

    const updateDisplay = () => {
        if (operation != null) {
            return `${previousOperand} ${operation}`;
        }
        return currentOperand;
    };

    const handleKeyboardInput = (e) => {
        if (e.key >= '0' && e.key <= '9') {
            appendNumber(e.key);
        }
        if (e.key === '.') {
            appendNumber(e.key);
        }
        if (e.key === '+' || e.key === '-' || e.key === '*') {
            chooseOperation(e.key === '*' ? 'x' : e.key);
        }
        if (e.key === '/') {
            chooseOperation('÷');
        }
        if (e.key === 'Enter' || e.key === '=') {
            compute();
        }
        if (e.key === 'Backspace') {
            deleteDigit();
        }
        if (e.key === 'Escape') {
            clear();
        }
    };

    useEffect(() => {
      
        document.addEventListener('keydown', handleKeyboardInput);
        return () => {
            document.removeEventListener('keydown', handleKeyboardInput); 
        };
    }, [currentOperand, operation]);

    return (
        <div className="wrapper">
            <section className="screen">
                <div className="current" data-operand-current>{currentOperand}</div>
                <div className="result" data-operand-result>{updateDisplay()}</div>
            </section>

            <section className="calc-btn_row">
                <div className="calc_btn_row">
                    <button className="calc_btn double" onClick={clear}>C</button>
                    <button className="calc_btn" onClick={deleteDigit}>⬅</button>
                    <button className="calc_btn" onClick={() => chooseOperation('÷')}>÷</button>
                </div>

                <div className="calc_btn_row">
                    <button className="calc_btn" onClick={() => appendNumber('7')}>7</button>
                    <button className="calc_btn" onClick={() => appendNumber('8')}>8</button>
                    <button className="calc_btn" onClick={() => appendNumber('9')}>9</button>
                    <button className="calc_btn" onClick={() => chooseOperation('x')}>x</button>
                </div>

                <div className="calc_btn_row">
                    <button className="calc_btn" onClick={() => appendNumber('4')}>4</button>
                    <button className="calc_btn" onClick={() => appendNumber('5')}>5</button>
                    <button className="calc_btn" onClick={() => appendNumber('6')}>6</button>
                    <button className="calc_btn" onClick={() => chooseOperation('-')}>-</button>
                </div>

                <div className="calc_btn_row">
                    <button className="calc_btn" onClick={() => appendNumber('1')}>1</button>
                    <button className="calc_btn" onClick={() => appendNumber('2')}>2</button>
                    <button className="calc_btn" onClick={() => appendNumber('3')}>3</button>
                    <button className="calc_btn" onClick={() => chooseOperation('+')}>+</button>
                </div>

                <div className="calc_btn_row">
                    <button className="calc_btn" onClick={() => appendNumber('.')}>.</button>
                    <button className="calc_btn double" onClick={() => appendNumber('0')}>0</button>
                    <button className="calc_btn" onClick={compute}>=</button>
                </div>
            </section>
        </div>
    );
}

export default Calculator;
